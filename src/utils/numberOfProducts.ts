import { cartItem } from "../types/cartItem";

const numberOfProducts = (cartItems: cartItem[]) => {
  return cartItems.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
};

export default numberOfProducts;
