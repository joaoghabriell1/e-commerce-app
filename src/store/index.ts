import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart-slice";
import productsReducer from "./products/products-slice";
import ordersReducer from "./orders/orders-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
