import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getAllProducts } from "../store/products/products-thunks";
import { sendCartData } from "../store/cart/cart-async";
import { getCartData } from "../store/cart/cart-async";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

let isInitial = true;

const RootLayout = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCartData());
  }, []);

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
