import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { Dish } from "../../types";
import React from "react";
import { addDish } from "../Cart/cartSlice";
import { selectLoading } from "./dishesSlice";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import { Link } from "react-router-dom";
import { deleteDish, fetchDishes } from "./dishesThunks";

interface Props {
  dish: Dish;
  isAdmin?: boolean;
}

const ClientDish: React.FC<Props> = ({ dish, isAdmin }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  const image = dish.image || imageUrl;

  const addDishToCart = () => {
    dispatch(addDish(dish));
  };

  const onDelete = async (id: string) => {
    await dispatch(deleteDish(id));
    await dispatch(fetchDishes());
  };

  return (
    <div className="pizza">
      <img src={image} alt="pizza" style={{ width: "250px" }} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fs-3 fw-bold">{dish.name}</h5>
        <p className="card-text">{dish.price} KGS</p>
        {isAdmin ? (
          <p className="d-flex gap-2 ">
            <button
              className="btn btn-danger"
              onClick={() => onDelete(dish.id)}
            >
              {loading && <ButtonSpinner />}
              Удалить
            </button>
            <Link to={"/edit-dish/" + dish.id} className="btn btn-primary">
              Редактировать
            </Link>
          </p>
        ) : (
          <button className="btn btn-success" onClick={addDishToCart}>
            Добавить в корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientDish;
