import ApiServices from "../../api/apiServices";
import { OrderType } from "../../types/order";
import { AppDispatch } from "..";
import { setOrders } from "./orders-slice";

export const postOrderData = (id: string, order: OrderType[]): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ApiServices.sendOrder(id, order);
      dispatch(setOrders({ type: "success", payload: order }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOrders = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setOrders({ type: "loading", payload: [] }));
    try {
      const response = await ApiServices.getUserOrders(id);
      dispatch(setOrders({ type: "success", payload: response.data || [] }));
    } catch (e) {
      console.log(e);
    }
  };
};
