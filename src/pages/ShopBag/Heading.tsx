import styled from "styled-components";
import { cartItem } from "../../types/cartItem";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setTotal } from "../../store/cart-slice";
interface Props {
  cartIsEmpty: boolean;
  cartItems: cartItem[];
  cartTotal: number;
}
const ShopBagHeading = ({ cartIsEmpty, cartItems, cartTotal }: Props) => {
  const dispatch = useAppDispatch();
  const numberOfProducts = cartItems.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  useEffect(() => {
    dispatch(setTotal(cartItems));
  }, [cartItems]);

  if (cartIsEmpty) {
    return <p>Você ainda não adicionou itens no seu carrinho!</p>;
  }

  return (
    <header>
      <div>
        <Heading>SEU CARRINHO</Heading>
        <div>
          <span>
            Total ({numberOfProducts}{" "}
            {numberOfProducts === 1 ? "produto" : "produtos"}){" "}
          </span>
          <CartTotal>R${cartTotal},00</CartTotal>
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
