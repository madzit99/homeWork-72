import { useAppDispatch } from "../../app/Hooks";
import { Dish } from "../../types";
import React from "react";
import { addDish } from "../Cart/cartSlice";

interface Props {
  dish: Dish;
}

const ClientDish: React.FC<Props> = ({ dish }) => {
  const dispatch = useAppDispatch();

  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png";
  const image = dish.image || imageUrl;
  const imageStyle = {
    backgroundImage: `url(${image})`,
  };

  const addDishToCart = () => {
    dispatch(addDish(dish));
  };

  return (
    <div className="pizza" style={imageStyle}>
      <div>
        <div className="card-body">
          <h5 className="card-title fs-3 fw-bold">{dish.name}</h5>
          <p className="card-text">{dish.price} KGS</p>
          <button className="btn btn-success" onClick={addDishToCart}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDish;
