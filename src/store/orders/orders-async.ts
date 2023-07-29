import ApiServices from "../../api/apiServices";
import { OrderType } from "../../types/order";
import { AppDispatch } from "..";
import { setOrders } from "./orders-slice";

export const postOrderData = (id: string, order: OrderType[]) => {
  return async (dispatch: AppDispatch): Promise<string> => {
    try {
      const response = await ApiServices.sendOrder(id, order);
      dispatch(setOrders({ type: "success", payload: order }));
      return response;
    } catch (e) {
      console.log(e);
      return "An error ocurred";
    }
  };
};

export function getOrders(id: string) {
  return async (dispatch: AppDispatch): Promise<void | string> => {
    dispatch(setOrders({ type: "loading", payload: [] }));
    try {
      const response = await ApiServices.getUserOrders(id);
      dispatch(setOrders({ type: "success", payload: response.data || [] }));
    } catch (e) {
      console.log(e);
      return "An error ocurred";
    }
  };
}
