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

  const onSubmit = handleSubmit(() => {
    console.log("oi");
  });

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
          <div>{errors?.zipCode && <p>{errors.zipCode.message}</p>}</div>
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
        </InputContainer>
        <InputContainer>
          <label htmlFor="expDate">Expiration Date</label>
          <input
            type="text"
            id="expDate"
            {...register("expDate", { required: "Expiration Date Required" })}
          />
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
        </InputContainer>
        <button>click </button>
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
    padding: 0.4rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
`;
export default CheckOutForm;
