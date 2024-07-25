import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dish, DishesList } from "../../types";
import { AppDispatch } from "../../app/store";
import axiosApi from "../../axiosApi";

export const fetchDishes = createAsyncThunk<
  Dish[],
  undefined,
  { dispatch: AppDispatch }
>("dishes/fetchAll", async () => {
  const dishesResponse = await axiosApi.get<DishesList | null>("/dishes.json");
  const dishes = dishesResponse.data;

  let newDishes: Dish[] = [];

  if (dishes) {
    newDishes = Object.keys(dishes).map((key) => {
      const dish = dishes[key];
      return {
        ...dish,
        id: key,
      };
    });
  }
  return newDishes;
});
