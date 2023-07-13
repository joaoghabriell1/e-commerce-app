import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux-hooks";
import { Outlet } from "react-router-dom";
import { setProducts } from "../store/products-slice";
import useFetchProducts from "../hooks/useFetchProducts";
import Header from "../components/Header";

const RootLayout = () => {
  const { products } = useFetchProducts("https://dummyjson.com/products");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
