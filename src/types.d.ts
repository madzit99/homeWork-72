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

export interface CartDish {
  dish: Dish;
  amount: number;
}
