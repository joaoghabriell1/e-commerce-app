import styled from "styled-components";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<any>>;
  value: string;
  type: string;
  name: string;
  label: string;
}

const DefaultInput = ({ onChange, label, value, type, name }: Props) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input value={value} onChange={onChange} name={name} type={type} />
    </InputContainer>
  );
};

const InputContainer = styled.div`
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
  }
`;
export default DefaultInput;
