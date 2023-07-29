import styled from "styled-components";
import { cartItem } from "../../types/cartItem";
import amountOfProducts from "../../utils/numberOfProducts";

interface Props {
  cartIsEmpty: boolean;
  cartItems: cartItem[];
  cartTotal: number;
}

const ShopBagHeading = ({ cartIsEmpty, cartItems, cartTotal }: Props) => {
  const numberOfProducts = amountOfProducts(cartItems);

  if (cartIsEmpty) {
    return <p>Your cart is empty!</p>;
  }

  return (
    <header>
      <div>
        <Heading>YOUR CART</Heading>
        <div>
          <span>
            Total ({numberOfProducts}{" "}
            {numberOfProducts === 1 ? "product" : "products"}){" "}
          </span>
          <CartTotal>U${cartTotal},00</CartTotal>
        </div>
      </div>
    </header>
  );
};

const Heading = styled.h2`
  font-weight: bold;
  color: var(--clr-gray-300);
  margin-bottom: 0.6rem;
`;

const CartTotal = styled.span`
  font-weight: bold;
`;

export default ShopBagHeading;
