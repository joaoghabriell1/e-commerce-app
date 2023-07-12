import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartStore.reducer;
