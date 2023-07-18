import styled from "styled-components";
import { useForm } from "react-hook-form";
import { forwardRef } from "react";
type FormValues = {
  zipCode: string;
  address: string;
  houseNumber: string;
  nameOnCard: string;
  expDate: string;
  creditCardNumber: string;
  securityCode: number;
};

const CheckOutForm = forwardRef<HTMLFormElement>((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(() => {});

  return (
    <form ref={ref} onSubmit={onSubmit}>
      <Fieldset>
        <Heading>Shipping Info</Heading>
        <InputContainer>
          <label htmlFor="">Zip Code</label>
          <input
            type="text"
            {...register("zipCode", {
              required: "Zip Code Required",
              pattern: {
                value: /^[0-9]{5}-[0-9]{3}$/g,
                message: "Plese use the requested format, ex: 12345-679",
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
          <label htmlFor="streetAddres">Street Addresss</label>
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
            {...register("houseNumber", { required: "House Number Required" })}
          />
        </InputContainer>
        <div>
          {errors?.houseNumber && (
            <ErrorMessage>{errors.houseNumber.message}</ErrorMessage>
          )}
        </div>
      </Fieldset>
      <Fieldset>
        <Heading>Payment</Heading>
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
            {...register("expDate", { required: "Expiration Date Required" })}
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
            type="number"
            id="creditCardNumber"
            {...register("creditCardNumber", {
              required: "Credit Card Number Required",
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
    </form>
  );
});

const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  position: relative;
  padding-bottom: 2rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 500px;
    border-bottom: 1px solid lightgray;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  input {
    padding: 0.6rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.4rem;
  color: red;
  font-weight: bold;
`;
export default CheckOutForm;
