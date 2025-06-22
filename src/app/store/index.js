import { configureStore } from "@reduxjs/toolkit";

// пока пустые слайсы, добавим по мере надобности
const store = configureStore({
  reducer: {
    // auth: authReducer,
    // cart: cartReducer,
    // и т.д.
  },
});

export default store;
