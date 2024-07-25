import React from "react";
import { CartDish } from "../../types";
import CartItem from "./CartItem";

interface Props {
  cartDishes: CartDish[];
}

const CartDishes: React.FC<Props> = ({ cartDishes }) => {
  return (
    <>
      {cartDishes.map((cartDish) => (
        <CartItem key={cartDish.dish.id} cartDish={cartDish} />
      ))}
    </>
  );
};

export default CartDishes;
