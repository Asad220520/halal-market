import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/autSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    // cart: cartReducer,
    // и т.д.
  },
});

export default store;
