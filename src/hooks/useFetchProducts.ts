import { useState, useEffect } from "react";
import { ProductsFetchResponse } from "../types/productFetchResponse";
import { ProductsApiResponse } from "../types/productsApiResponse";

const useFetchProducts = (url: string): ProductsFetchResponse => {
  const [products, setProducts] = useState<ProductsApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const apiCall = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, [url]);

  return {
    products: products,
    loading: loading,
    error: error,
  };
};

export default useFetchProducts;
