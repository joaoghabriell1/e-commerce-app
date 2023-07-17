import { useAppSelector } from "../../hooks/redux-hooks";
import AuthContext from "../../store/auth-context";
import styled from "styled-components";
import { MainContainer } from "../../globalSyles";
import { useContext } from "react";
import { AuthType } from "../../store/auth-context";
import { Navigate } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const authContext = useContext(AuthContext) as AuthType;
  const { user, logOut } = authContext;

  if (!user) {
    return <Navigate to="/auth"></Navigate>;
  }

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <MainContainer>
        {user.uid}
        <button onClick={handleLogout}>logout</button>
        <CheckOutForm />
        <div>
          <h3>Items</h3>
          <ul>
            {cart.map((item) => {
              return (
                <CheckoutItem key={item.id}>
                  <div>
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <div>R${item.price},00</div>
                    <div>
                      <span>Quantity: </span> <span>{item.amount}</span>
                    </div>
                  </div>
                </CheckoutItem>
              );
            })}
          </ul>
        </div>
      </MainContainer>
    </div>
  );
};

const CheckoutItem = styled.li`
  display: flex;
  img {
    width: 225px;
  }
`;

export default Checkout;
