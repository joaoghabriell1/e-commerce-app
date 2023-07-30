import ApiClient from "./apiClient";
import { Product } from "../types/product";
import { cartItem } from "../types/cartItem";
import { OrderType } from "../types/order";

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

const sendOrder = (id: string, data: OrderType[]): Promise<string> => {
  return ApiClient.put(`./users/${id}/orders.json`, data);
};

const getUserInfo = (id: string) => {
  return ApiClient.get(`./users/${id}/info.json`);
};

const ApiServices = {
  getAllProducts,
  getCart,
  sendCartData,
  getUserOrders,
  sendOrder,
  getUserInfo,
};

export default ApiServices;
