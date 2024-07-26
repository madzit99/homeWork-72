import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import CartDishes from "../Cart/CartDishes";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { clearCart, selectCartDishes } from "../Cart/cartSlice";
import axiosApi from "../../axiosApi";

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
