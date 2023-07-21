import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setProducts } from "../store/products-slice";
import useFetchProducts from "../hooks/useFetchProducts";
import { fetchCartData } from "../store/cart-async";
import { sendCartData } from "../store/cart-async";
import { setTotal } from "../store/cart-slice";
let isInitial = true;

const RootLayout = () => {
  const { products } = useFetchProducts("https://dummyjson.com/products");
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    dispatch(setTotal(cartItems));
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products, dispatch]);

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
