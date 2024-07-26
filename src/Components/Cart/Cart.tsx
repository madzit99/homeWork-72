import React, { useState } from "react";
import CartDishes from "./CartDishes";
import { useAppSelector } from "../../app/Hooks";
import { selectCartDishes } from "./cartSlice";
import Modal from "../Modal/Modal";
const Cart: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  const [open, setOpen] = useState<boolean>(false);

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, 0);

  let cart = <div className="alert alert-success">Корзина пустая</div>;

  if (cartDishes.length > 0) {
    cart = (
      <>
        <CartDishes cartDishes={cartDishes} />
        <div>Общая сумма: {total} KGS</div>
      </>
    );
  }

  return (
    <>
      <h4>Корзина</h4>
      {cart}
      <button className="w-100 btn btn-success" onClick={() => setOpen(true)}>
        Заказать
      </button>
      <Modal show={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Cart;
