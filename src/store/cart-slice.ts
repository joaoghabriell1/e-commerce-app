import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../types/cartItem";

interface InitialType {
  items: cartItem[];
}

const initialState: InitialType = {
  items: [],
};

const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<cartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addProduct } = cartStore.actions;
export default cartStore.reducer;
