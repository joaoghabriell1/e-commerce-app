import AuthContext from "../../store/auth/auth-context";
import { MainContainer } from "../../globalSyles";
import { useContext, useRef, useState } from "react";
import { AuthType } from "../../store/auth/auth-context";
import { Navigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import CheckoutItemsList from "./CheckoutItemsList";
import { Heading } from "./CheckOutForm";
import { styled } from "styled-components";
import OrderSubmitModal from "./OrderSubmitModal";

const Checkout = () => {
  const { user } = useContext(AuthContext) as AuthType;
  const [submited, setSubmited] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (!user) {
    return <Navigate to="/auth"></Navigate>;
  }
  if (submited) {
    document.body.style.overflow = "hidden";
  }

  return (
    <MainContainer>
      {submited && <OrderSubmitModal setSubmited={setSubmited} />}
      <Wrapper>
        <CheckOutForm setSubmited={setSubmited} ref={formRef} />
        <Heading>Items</Heading>
        <CheckoutItemsList />
        <SubmitButton onClick={() => formRef.current?.requestSubmit()}>
          Finish you order
        </SubmitButton>
      </Wrapper>
    </MainContainer>
  );
};

const Wrapper = styled.div`
  display: grid;
`;

const SubmitButton = styled.button`
  border: 0;
  background: #969292;
  padding: 1rem;
  color: black;
  border-radius: 100vh;
  font-family: inherit;
  font-weight: bold;
  margin-block: 5rem;
  border: 2px solid black;
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default Checkout;
