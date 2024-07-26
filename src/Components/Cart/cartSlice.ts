import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiOrders, CartDish, Dish } from "../../types";
import { RootState } from "../../app/store";
import { deleteOrder, fetchOrderData } from "../Dishes/dishesThunks";

export interface CartState {
  cartDishes: CartDish[];
  orders: ApiOrders | null;
  loading: boolean;
  error: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  orders: null,
  loading: false,
  error: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addDish: (state, { payload: dish }: PayloadAction<Dish>) => {
      const index = state.cartDishes.findIndex(
        (cartDish) => cartDish.dish.id === dish.id
      );

      if (index !== -1) {
        state.cartDishes[index].amount++;
      } else {
        state.cartDishes.push({
          amount: 1,
          dish,
        });
      }
    },
    clearCart: (state) => {
      state.cartDishes = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderData.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchOrderData.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrderData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(deleteOrder.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteOrder.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const cartReducers = cartSlice.reducer;

export const { addDish, clearCart } = cartSlice.actions;

export const selectCartDishes = (state: RootState) => state.cart.cartDishes;
export const selectOrders = (state: RootState) => state.cart.orders;
export const selectCartLoading = (state: RootState) => state.cart.loading;
