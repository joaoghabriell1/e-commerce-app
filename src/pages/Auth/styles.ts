import styled from "styled-components";

interface InputProps {
  invalid: number;
}

export const Message = styled.div`
  font-size: 1.4rem;
  text-align: center;
  span {
    color: red;
    font-weight: bold;
  }
`;

export const ServerErrorMessageContainer = styled.p`
  color: red;
  font-weight: bold;
  max-width: 40ch;
  font-size: 1.4rem;
`;

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: bold;
    color: var(--clr-gray-100);
  }
  input {
    background: var(--clr-gray-200);
    border: 0;
    border-radius: 5px;
    padding: 1rem;
    border: 2px solid ${(p: InputProps) => (p.invalid ? "red" : "none")};
    outline: 0;
  }
`;

export const ActionButton = styled.button`
  margin-block: 3rem;
  padding-block: 1rem;
  border-radius: 5px;
  font-family: inherit;
  text-transform: capitalize;
  font-weight: bold;
  background: lightgray;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  min-width: 400px;
  display: grid;
  align-items: center;
  background: var(--clr-white);
  border-radius: 1rem;
  padding: 1.5rem 1.5rem;
  gap: 1rem;
  h3 {
    text-align: start;
    font-size: W 2.5rem;
    margin-bottom: 3rem;
  }
`;

export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
  font-weight: bold;
  margin-top: 5px;
`;
