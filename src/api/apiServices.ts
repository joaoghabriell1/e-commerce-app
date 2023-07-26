import ApiClient from "./apiClient";
import { Product } from "../types/product";
import { cartItem } from "../types/cartItem";

const getAllProducts = () => {
  return ApiClient.get<Product[]>("/products.json");
};

const getCart = () => {
  return ApiClient.get<cartItem[]>("/cart.json");
};

const sendCartData = (data: cartItem[]) => {
  return ApiClient.put<cartItem[]>("/cart.json", data);
};
const ApiServices = {
  getAllProducts,
  getCart,
  sendCartData,
};

export default ApiServices;
