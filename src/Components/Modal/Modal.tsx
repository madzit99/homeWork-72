import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import CartDishes from "../Cart/CartDishes";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { clearCart, selectCartDishes } from "../Cart/cartSlice";
import axiosApi from "../../axiosApi";
import { DELIVERY } from "../../constants";

interface Props extends React.PropsWithChildren {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, onClose }) => {
  const dispatch = useAppDispatch();
  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const cartDishes = useAppSelector(selectCartDishes);

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await axiosApi.post("orders.json", cartDishes);
    dispatch(clearCart());
    onClose();
  };

  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, DELIVERY);

  return (
    <>
      <Backdrop show={show} onClick={onClose} />
      <div
        className="modal show"
        style={{ display: show ? "block" : "none" }}
        onClick={onClose}
      >
        <div className="modal-dialog" onClick={onInnerClick}>
          <form onSubmit={onFormSubmit} className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Подтверждение заказа</h1>
            </div>
            <div>
              <CartDishes cartDishes={cartDishes} />
              <div className="card mb-2 p-2">
                <div className="row align-items-center">
                  <div className="col-6 text-start">Доставка:</div>
                  <div className="col-6 text-end">{DELIVERY} KGS</div>
                </div>
              </div>
              <div className="card mb-2 p-2">
                <div className="row align-items-center">
                  <div className="col-6 text-start">Общая сумма заказа:</div>
                  <div className="col-6 text-end">{total} KGS</div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={onClose}>
                Отмена
              </button>
              <button className="btn btn-success" type="submit">
                Заказать
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
