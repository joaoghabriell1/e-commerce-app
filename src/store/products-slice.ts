import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface InitialStateType {
  products: Product[];
  categoryFilter: string;
  especificProductFilter: string;
}

const initialState: InitialStateType = {
  products: [],
  categoryFilter: "",
  especificProductFilter: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
  },
});

export const { setProducts, setFilter } = productsSlice.actions;

export default productsSlice.reducer;
