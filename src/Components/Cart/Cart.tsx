import React, { useState } from "react";
import CartDishes from "./CartDishes";
import { useAppSelector } from "../../app/Hooks";
import { selectCartDishes } from "./cartSlice";
import Modal from "../Modal/Modal";
const Cart: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  const [open, setOpen] = useState<boolean>(false);

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
      <button className="w-100 btn btn-success" onClick={() => setOpen(true)}>
        Заказать
      </button>
      <Modal show={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Cart;
