import AuthContext from "../../store/auth-context";
import { MainContainer } from "../../globalSyles";
import { useContext, useRef } from "react";
import { AuthType } from "../../store/auth-context";
import { Navigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import CheckoutItemsList from "./CheckoutItemsList";
import { Heading } from "./CheckOutForm";
import { styled } from "styled-components";

const Checkout = () => {
  const authContext = useContext(AuthContext) as AuthType;
  const { user, logOut } = authContext;
  const formRef = useRef<HTMLFormElement>(null);

  if (!user) {
    return <Navigate to="/auth"></Navigate>;
  }

  const handleLogout = () => {
    logOut();
  };

  return (
    <MainContainer>
      <Wrapper>
        <button onClick={handleLogout}>logout</button>
        <div>
          <CheckOutForm ref={formRef} />
        </div>
        <div>
          <Heading>Items</Heading>
          <CheckoutItemsList />
        </div>
        <SubmitButton onClick={() => formRef.current?.requestSubmit()}>
          Submit
        </SubmitButton>
      </Wrapper>
    </MainContainer>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 500px;
`;

const SubmitButton = styled.button`
  width: 200px;
  border: 0;
  background: lightgray;
  padding: 1rem;
  border-radius: 100vh;
  font-family: inherit;
  font-weight: bold;
  width: 100%;
  margin-block: 5rem;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default Checkout;
