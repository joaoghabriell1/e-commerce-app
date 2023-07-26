import ApiServices from "../../api/apiServices";
import { setProducts } from "./products-slice";
import type { AppDispatch } from "..";

export const getAllProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await ApiServices.getAllProducts();
      dispatch(setProducts(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
