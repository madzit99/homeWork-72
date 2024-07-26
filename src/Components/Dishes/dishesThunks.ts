import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiDish, ApiOrders, Dish, DishesList } from "../../types";
import { AppDispatch, RootState } from "../../app/store";
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

export const fetchDish = createAsyncThunk<
  ApiDish,
  string,
  { state: RootState }
>("dishes/fetchOne", async (id) => {
  const response = await axiosApi.get<ApiDish | null>(
    "/dishes/" + id + ".json"
  );
  const dish = response.data;

  if (dish === null) {
    throw new Error("Not found");
  }

  return dish;
});

export const createDish = createAsyncThunk<void, ApiDish, { state: RootState }>(
  "dishes/create",
  async (dish) => {
    await axiosApi.post("/dishes.json", dish);
  }
);

export const deleteDish = createAsyncThunk<void, string, { state: RootState }>(
  "dishes/delete",
  async (dishId) => {
    await axiosApi.delete(`/dishes/${dishId}.json`);
  }
);

interface UpdateDishParams {
  id: string;
  dish: ApiDish;
}

export const updateDish = createAsyncThunk<
  void,
  UpdateDishParams,
  { state: RootState }
>("dishes/update", async ({ id, dish }) => {
  await axiosApi.put("/dishes/" + id + ".json", dish);
});

export const fetchOrderData = createAsyncThunk<
  ApiOrders,
  void,
  { state: RootState }
>("orders/fetchOrderData", async () => {
  try {
    const response = await axiosApi.get("orders.json");
    return response.data;
  } catch (error) {
    console.log("Error!", error);
  }
});

export const deleteOrder = createAsyncThunk<void, string, { state: RootState }>(
  "dishes/delete",
  async (dishId) => {
    await axiosApi.delete(`/orders/${dishId}.json`);
  }
);
