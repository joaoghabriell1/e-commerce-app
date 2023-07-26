import { AppDispatch } from "..";
import ApiServices from "../../api/apiServices";
import { setInitialCart } from "./cart-slice";
import { cartItem } from "../../types/cartItem";

export const getCartData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ApiServices.getCart();
      const data = response.data || [];
      dispatch(setInitialCart(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const sendCartData = (cart: cartItem[]) => {
  return async () => {
    try {
      const response = await ApiServices.sendCartData(cart);
      const data = response.data;
    } catch (e) {
      console.log(e);
    }
  };
};
