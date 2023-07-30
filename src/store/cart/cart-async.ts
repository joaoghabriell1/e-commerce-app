import { setInitialCart, setTotal } from "./cart-slice";
import { cartItem } from "../../types/cartItem";
import { AppDispatch } from "..";

export const getCartData = () => {
  return (dispatch: AppDispatch) => {
    let localStorageData = JSON.parse(localStorage.getItem("cart")!);
    if (!localStorageData) localStorageData = [];
    dispatch(setInitialCart(localStorageData));
  };
};

export const sendCartData = (cart: cartItem[]) => {
  return (dispatch: AppDispatch) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(setTotal(cart));
  };
};
