import styled from "styled-components";
import { useForm } from "react-hook-form";
import { forwardRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useGetCurrentUserId } from "../../hooks/getCurrentUserId";
import { postOrderData } from "../../store/orders/orders-async";
import { OrderType } from "../../types/order";
import { cleanCart } from "../../store/cart/cart-slice";

type Props = {
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormValues = {
  zipCode: string;
  address: string;
  houseNumber: string;
  nameOnCard: string;
  expDate: string;
  creditCardNumber: string;
  securityCode: number;
};

const CheckOutForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
  const cart = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);
  const orders = useAppSelector((state) => state.orders.orders);
  const { currentUserId } = useGetCurrentUserId();
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit(async (formData) => {
    const todaysDate = new Date().toISOString();

    const orderData: OrderType[] = [
      ...orders,
      {
        zipCode: formData.zipCode,
        state: state,
        city: city,
        adress: formData.address,
        houseNum: formData.houseNumber,
        order: cart,
        total: total,
        date: todaysDate,
      },
    ];

    props.setSubmited(true);
    window.scrollTo(0, 0);
    dispatch(postOrderData(currentUserId!, orderData));
    dispatch(cleanCart());
  });

  return (
    <Form ref={ref} onSubmit={onSubmit}>
      <Heading>Shipping Info</Heading>
      <Fieldset>
        <InputContainer>
          <label htmlFor="">Zip Code</label>
          <input
            type="text"
            placeholder="ex: 99150-000"
            maxLength={9}
            {...register("zipCode", {
              required: "Zip Code Required",
              pattern: {
                value: /^[0-9]{5}-[0-9]{3}$/g,
                message: "Plese use the requested format, ex: 12345-679",
              },
              validate: {
                checkCep: async (fieldValue: string) => {
                  const cleanCep = fieldValue.replace(/\D/, "");

                  const response = await fetch(
                    `https://viacep.com.br/ws/${cleanCep}/json/`
                  );
                  const data = await response.json();
                  if (!data.hasOwnProperty("erro")) {
                    setCity(data.localidade);
                    setState(data.uf);
                  } else {
                    setCity("");
                    setState("");
                  }
                  return !data.hasOwnProperty("erro") || "Invalid Zip Code";
                },
              },
            })}
          />
          <div>
            {errors?.zipCode && (
              <ErrorMessage>{errors.zipCode.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
        <InputContainer>
          <label htmlFor="">State</label>
          <input type="text" disabled={true} value={state} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">City</label>
          <input disabled={true} type="text" value={city} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="t streetAddres">Street Addresss</label>
          <input
            type="text"
            id="streetAddres"
            {...register("address", {
              required: "Address Required",
            })}
          />
          <div>
            {errors?.address && (
              <ErrorMessage>{errors.address.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
        <InputContainer>
          <label htmlFor="houseNumber">House Number</label>
          <input
            type="text"
            id="houseNumber"
            maxLength={7}
            {...register("houseNumber", {
              required: "House Number Required",
            })}
          />
          <div>
            {errors?.houseNumber && (
              <ErrorMessage>{errors.houseNumber.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
      </Fieldset>
      <Heading>Payment</Heading>
      <Fieldset>
        <InputContainer>
          <label htmlFor="nameOnCard">Name On Card:</label>
          <input
            type="text"
            id="nameOnCard"
            {...register("nameOnCard", { required: "Name Required" })}
          />
          <div>
            {errors?.nameOnCard && (
              <ErrorMessage>{errors.nameOnCard.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
        <InputContainer>
          <label htmlFor="expDate">Expiration Date</label>
          <input
            type="text"
            id="expDate"
            placeholder="Format: 02/2028 - 02/28"
            {...register("expDate", {
              required: "Expiration Date Required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/g,
                message:
                  "Please, use one of the required formats. Eg: 02/28 - 02/2028",
              },
              validate: {
                isDateInTheFuture: (fieldValue: string) => {
                  let month = fieldValue.split("/")[0];
                  let year = fieldValue.split("/")[1];

                  if (year.length === 2) {
                    year = `20${year}`;
                  }

                  const expDate = new Date(+year, +month - 1);
                  const today = new Date();
                  return expDate > today || "Insert a valid date, please.";
                },
              },
            })}
          />
          <div>
            {errors?.expDate && (
              <ErrorMessage>{errors.expDate.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
        <InputContainer>
          <label htmlFor="creditCardNumber">Credit Card</label>
          <input
            type="text"
            id="creditCardNumber"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            {...register("creditCardNumber", {
              required: "Credit Card Number Required",
              pattern: {
                value: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
                message: "Invalid format.",
              },
            })}
          />
          <div>
            {errors?.creditCardNumber && (
              <ErrorMessage>{errors.creditCardNumber.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
        <InputContainer>
          <label htmlFor="securityCode">Security Code</label>
          <input
            type="number"
            id="securityCode"
            {...register("securityCode", {
              required: "Security Code Number Required",
            })}
          />
          <div>
            {errors?.securityCode && (
              <ErrorMessage>{errors.securityCode.message}</ErrorMessage>
            )}
          </div>
        </InputContainer>
      </Fieldset>
    </Form>
  );
});

const Form = styled.form`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  display: grid;
  margin-right: 0;
  gap: 1rem;
  position: relative;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  background: var(--clr-dark-gray-200);
  border-radius: 1rem;
  padding: 1rem;
  & > div {
    flex-basis: 45%;
    flex-grow: 1;
    max-width: 54rem;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 600;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 0.9rem;
    font-weight: 500;
    border-radius: 5px;
    background: var(--clr-dark-gray-300);
    color: var(--clr-text-300);
    border: 1px solid var(--clr-dark-gray-100);
  }
  input[type="text"]:disabled {
    background-color: var(--clr-text-100);
    outline: 0;
    border: 2px solid black;
    font-weight: 500;
  }

  label {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.4rem;
  color: red;
  font-weight: 500;
`;
export default CheckOutForm;
