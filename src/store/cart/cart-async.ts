import { setInitialCart, setTotal } from "./cart-slice";
import { cartItem } from "../../types/cartItem";
import { AppDispatch } from "..";

export const getCartData = () => {
  return (dispatch: AppDispatch) => {
    const localStorageData = JSON.parse(localStorage.getItem("cart")) || [];

    dispatch(setInitialCart(localStorageData));
  };
};

export const sendCartData = (cart: cartItem[]) => {
  return (dispatch: AppDispatch) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(setTotal(cart));
  };
};
