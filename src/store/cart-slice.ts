import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface InitialType {
  items: any[];
}

const initialState: InitialType = {
  items: [],
};

const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<[]>) => {
      state.items.push(action.payload);
    },
  },
});

export default cartStore.reducer;
