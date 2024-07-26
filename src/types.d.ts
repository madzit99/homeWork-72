export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
}

export type ApiDish = Omit<Dish, "id">;

export interface DishesList {
  [id: string]: ApiDish;
}

export interface DishMutation {
  name: string;
  image: string;
  price: string;
}

export interface CartDish {
  dish: Dish;
  amount: number;
}

export interface ApiOrders {
  [id: string]: CartDish[];
}
