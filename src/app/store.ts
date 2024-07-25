import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "../Components/Dishes/dishesSlice";
import { cartReducers } from "../Components/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
