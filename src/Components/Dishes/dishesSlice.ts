import { Dish } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { createDish, fetchDishes } from "./dishesThunks";
import { RootState } from "../../app/store";

export interface DishState {
  dishes: Dish[];
  loading: boolean;
  error: boolean;
}

const initialState: DishState = {
  dishes: [],
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
  },
});

export const dishesReducer = dishesSlice.reducer;
export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectLoading = (state: RootState) => state.dishes.loading;
