import styled from "styled-components";

interface InputProps {
  invalid: number;
}

export const Message = styled.div`
  font-size: 1.4rem;
  text-align: center;
  span {
    color: var(--clr-accent-green);
    font-weight: 500;
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
    font-weight: 500;
    color: var(--clr-text-300);
  }
  input {
    background: var(--clr-dark-gray-300);
    border: 0;
    color: var(--clr-text-300);
    border-radius: 5px;
    padding: 1.2rem;
    border: 1px solid
      ${(p: InputProps) => (p.invalid ? "red" : "var(--clr-dark-gray-100)")};
    outline: 0;
  }
`;

export const ActionButton = styled.button`
  margin-block: 3rem;
  padding-block: 1rem;
  border-radius: 5px;
  font-family: inherit;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.4rem;
  background: var(--clr-accent-purple);
  border: 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  min-width: 400px;
  display: grid;
  align-items: center;
  background: var(--clr-dark-gray-200);
  border-radius: 1rem;
  border: 1px solid var(--clr-dark-gray-200);
  color: var(--clr-text-300);
  padding: 1.5rem 1.5rem;
  gap: 1rem;
  h3 {
    text-align: start;
    font-size: W 2.5rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 430px) {
    min-width: 200px;
    width: 320px;
  }
`;

export const Error = styled.p`
  font-size: 1.3rem;
  color: red;
  font-weight: 500;
  margin-top: 5px;
`;
