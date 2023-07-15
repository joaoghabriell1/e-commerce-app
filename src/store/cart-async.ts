import { setInitialCart } from "./cart-slice";
import { cartItem } from "../types/cartItem";

export const fetchCartData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data || [];
    };
    try {
      const cartData = await fetchData();
      dispatch(setInitialCart(cartData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart: cartItem[]) => {
  return async (dispatch: any) => {
    const putData = async () => {
      const response = await fetch(
        "https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: { "Content-type": "Applicaton/json" },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Couldn't send cart data");
      }
    };
    try {
      putData();
    } catch (error) {
      console.log(error);
    }
  };
};
