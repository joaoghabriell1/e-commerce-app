import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

interface setProductsPayload {
  products: Product[];
  type: "loading" | "success" | "error";
}

interface InitialStateType {
  products: Product[];
  categoryFilter: string;
  especificProductFilter: string | null;
  loading: boolean;
}

const initialState: InitialStateType = {
  products: [],
  categoryFilter: "",
  especificProductFilter: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<setProductsPayload>) => {
      const { products, type } = action.payload;
      switch (type) {
        case "loading":
          state.loading = true;
          break;
        case "success":
          state.loading = false;
          state.products = products;
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.categoryFilter = action.payload;
    },
    setEspecificProductFilter: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.especificProductFilter = action.payload;
    },
  },
});

export const { setProducts, setFilter, setEspecificProductFilter } =
  productsSlice.actions;

export default productsSlice.reducer;
