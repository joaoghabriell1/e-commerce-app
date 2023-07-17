import styled from "styled-components";

const CheckOutForm = () => {
  return (
    <form>
      <Fieldset>
        <Heading>Shipping Info</Heading>
        <InputContainer>
          <label htmlFor="">Zip Code</label>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Street Addresss</label>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">House Number</label>
          <input type="text" maxLength={7} />
        </InputContainer>
      </Fieldset>
      <Fieldset>
        <h3>Payment Method</h3>
      </Fieldset>
    </form>
  );
};

const Fieldset = styled.fieldset`
  border: 0;
  display: grid;
  gap: 1rem;
`;
const Heading = styled.h3`
  margin-bottom: 1rem;
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
