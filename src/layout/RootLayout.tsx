import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { sendCartData } from "../store/cart/cart-async";
import { setTotal } from "../store/cart/cart-slice";
import { getAllProducts } from "../store/products/products-thunks";
import { getCartData } from "../store/cart/cart-async";

let isInitial = true;

const RootLayout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCartData());
  }, []);

  useEffect(() => {
    dispatch(setTotal(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
