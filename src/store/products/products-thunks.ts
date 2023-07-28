import ApiServices from "../../api/apiServices";
import { setProducts } from "./products-slice";
import type { AppDispatch } from "..";

export const getAllProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setProducts({ type: "loading", products: [] }));
    try {
      const response = await ApiServices.getAllProducts();
      dispatch(setProducts({ type: "success", products: response.data }));
    } catch (e) {
      console.log(e);
    }
  };
};
