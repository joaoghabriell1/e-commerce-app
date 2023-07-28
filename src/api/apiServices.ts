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

const getUserOrders = (id: string) => {
  return ApiClient.get(`/users/${id}/orders.json`);
};

const sendOrder = (id: string, data: any) => {
  return ApiClient.put(`./users/${id}/orders.json`, data);
};

const ApiServices = {
  getAllProducts,
  getCart,
  sendCartData,
  getUserOrders,
  sendOrder,
};

export default ApiServices;
