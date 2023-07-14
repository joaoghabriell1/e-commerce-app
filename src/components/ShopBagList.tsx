import styled from "styled-components";
import ShopBagProduct from "./ShopBagProduct";
import { cartItem } from "../types/cartItem";

interface Props {
  cartItems: cartItem[];
  cartIsEmpty: boolean;
}

const ShopBagList = ({ cartItems }: Props) => {
  return (
    <Ul>
      {cartItems.map((item) => {
        return (
          <ShopBagProduct
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            thumbnail={item.thumbnail}
            amount={item.amount}
          />
        );
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  display: grid;
  gap: 1.6rem;
  margin-block: 2.3rem;
`;

export default ShopBagList;
