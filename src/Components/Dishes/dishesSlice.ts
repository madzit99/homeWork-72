import { ApiDish, Dish } from "../../types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createDish, fetchDish, fetchDishes, updateDish } from "./dishesThunks";
import { RootState } from "../../app/store";

export interface DishState {
  dishes: Dish[];
  dish: ApiDish | null;
  loading: boolean;
  error: boolean;
}

const initialState: DishState = {
  dishes: [],
  dish: null,
  loading: false,
  error: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDishes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, { payload: items }) => {
      state.loading = false;
      state.dishes = items;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createDish.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createDish.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createDish.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchDish.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchDish.fulfilled,
      (state, { payload: dish }: PayloadAction<ApiDish>) => {
        state.loading = false;
        state.dish = dish;
      }
    );
    builder.addCase(fetchDish.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(updateDish.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateDish.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateDish.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectOneDish = (state: RootState) => state.dishes.dish;
export const selectLoading = (state: RootState) => state.dishes.loading;
