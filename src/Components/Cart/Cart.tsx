import React from "react";
import CartDishes from "./CartDishes";
import { useAppSelector } from "../../app/Hooks";
import { selectCartDishes } from "./cartSlice";
const Cart: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);

  let cart = <div className="alert alert-success">Корзина пустая</div>;

  if (cartDishes.length > 0) {
    cart = (
      <>
        <CartDishes cartDishes={cartDishes} />
      </>
    );
  }
  return (
    <>
      <h4>Корзина</h4>
      {cart}
      <button className="w-100 btn btn-success">Заказать</button>
    </>
  );
};

export default Cart;
