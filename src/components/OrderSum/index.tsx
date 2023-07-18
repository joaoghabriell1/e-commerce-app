import styled from "styled-components";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";
import { AuthType } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
interface Props {
  cartTotal: number;
}

const OrderSum = ({ cartTotal }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { user } = authContext;
  const handleClick = () => {
    if (!user) {
      setError(true);
      return;
    }
    return navigate("/checkout");
  };
  return (
    <Aside>
      <div>
        <Title>Your Order</Title>
      </div>
      <div>
        <Wrapper>
          <FlexContainer>
            <span>Products Total:</span>
            <span>U$ {cartTotal},00</span>
          </FlexContainer>
          <FlexContainer>
            <span>Shipping</span>
            <span>U$ 40,00</span>
          </FlexContainer>
        </Wrapper>
        <FlexContainer>
          <Total>Total</Total>
          <Total>U$ {cartTotal + 40},00</Total>
        </FlexContainer>
        <ErrorMessage>
          {error ? (
            <p>
              To checkout you need to <Link to="/auth">LogIn</Link>
            </p>
          ) : null}
        </ErrorMessage>
        <div>
          <Button onClick={handleClick}>Proceed to Checkout</Button>
        </div>
      </div>
    </Aside>
  );
};

const Aside = styled.aside`
  padding-block: 1.6rem 2.4rem;
  padding-inline: 2.4rem;
  flex: 1;
  background: var(--clr-white);
  position: sticky;
  top: 2.5rem;
  height: 600px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
  a {
    color: red;
  }
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid hsla(203, 15%, 88%, 1);
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2.9rem;
`;

const Total = styled.span`
  font-weight: bold;
  margin-bottom: 4rem;
`;
const Button = styled.button`
  width: 100%;
  font: inherit;
  text-transform: uppercase;
  background: hsl(121, 42%, 52%);
  border: 0;
  border-radius: 3px;
  color: var(--clr-gray-200);
  padding-block: 1.2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default OrderSum;
