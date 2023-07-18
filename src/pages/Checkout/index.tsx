import AuthContext from "../../store/auth-context";
import { MainContainer } from "../../globalSyles";
import { useContext, useRef } from "react";
import { AuthType } from "../../store/auth-context";
import { Navigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import CheckoutItemsList from "./CheckoutItemsList";
import { Heading } from "./CheckOutForm";

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
    <div>
      <MainContainer>
        <button onClick={handleLogout}>logout</button>
        <div>
          <CheckOutForm ref={formRef} />
        </div>
        <div>
          <Heading>Items</Heading>
          <CheckoutItemsList />
        </div>
        <button onClick={() => formRef.current?.requestSubmit()}>Submit</button>
      </MainContainer>
    </div>
  );
};

export default Checkout;
