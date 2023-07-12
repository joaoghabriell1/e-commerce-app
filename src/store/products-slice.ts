import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface InitialStateType {
  products: Product[];
}

const initialState: InitialStateType = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {},
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
