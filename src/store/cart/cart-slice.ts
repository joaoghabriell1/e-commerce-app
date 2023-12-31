import { PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../../types/cartItem";
import { createSlice } from "@reduxjs/toolkit";

interface InitialType {
  isLoading: boolean;
  items: cartItem[];
  total: number;
}

const initialState: InitialType = {
  isLoading: false,
  items: [],
  total: 0,
};

const cartStore = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialCart: (state, action: PayloadAction<cartItem[]>) => {
      state.items = action.payload;
    },
    addProduct: (state, action: PayloadAction<cartItem>) => {
      const hasItem = state.items.find(
        (element) => element.id === action.payload.id
      );

      if (hasItem) {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount + action.payload.amount };
          }
          return item;
        });
        return;
      }
      state.items.push(action.payload);
    },
    setTotal: (state, action: PayloadAction<cartItem[]>) => {
      const total = action.payload.reduce((total, item) => {
        return (total += item.amount * item.price);
      }, 0);
      state.total = total;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (element) => element.id !== action.payload
      );
    },
    changeAmount: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: action.payload.amount };
        }
        return item;
      });
    },
    cleanCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  setInitialCart,
  addProduct,
  setTotal,
  removeItem,
  cleanCart,
  changeAmount,
} = cartStore.actions;
export default cartStore.reducer;
