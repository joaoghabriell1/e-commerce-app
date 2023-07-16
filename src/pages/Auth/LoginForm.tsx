import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { logIn, user } = authContext;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (e) {}
  };

  return (
    <Form onSubmit={submitHandler}>
      <h3>Log-In</h3>
      <InputContainer>
        <label htmlFor="">E-mail</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </InputContainer>
      <ActionButton>login</ActionButton>
      <div>Don't have an account? Register</div>
    </Form>
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

const ActionButton = styled.button`
  margin-block: 3rem;
`;

const Form = styled.form`
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

export default LoginForm;
