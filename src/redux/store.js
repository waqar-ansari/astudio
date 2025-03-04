import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice";
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productsReducer,
  },
});
