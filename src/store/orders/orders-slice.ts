import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "../../types/order";

interface Payload {
  type: "loading" | "success" | "error";
  payload: OrderType[];
}

interface InitialState {
  loading: boolean;
  orders: OrderType[];
  error: null | string;
}

const initialState: InitialState = {
  loading: false,
  orders: [],
  error: null,
};

const OrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Payload>) => {
      const { type, payload } = action.payload;
      console.log(payload);
      switch (type) {
        case "loading":
          state.loading = true;
          break;
        case "success":
          state.orders = payload;
          state.loading = false;
      }
    },
  },
});

export const { setOrders } = OrdersSlice.actions;
export default OrdersSlice.reducer;
