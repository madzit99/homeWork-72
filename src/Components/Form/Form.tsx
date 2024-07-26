import { ApiDish, DishMutation } from "../../types";
import React, { useState } from "react";
import ButtonSpinner from "../Spinner/ButtonSpinner";

const initialState: DishMutation = {
  name: "",
  image: "",
  price: "",
};

interface Props {
  onSubmit: (dish: ApiDish) => void;
  existingDish?: DishMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const Form: React.FC<Props> = ({
  onSubmit,
  existingDish = initialState,
  isEdit = false,
  isLoading = false,
}) => {
  const [dish, setDish] = useState<DishMutation>(existingDish);

  const changeDish = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDish((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    onSubmit({
      ...dish,
      price: parseFloat(dish.price),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{isEdit ? "Редактировать блюдо" : "Добавить новое блюдо"}</h4>
      <div className="form-group">
        <label htmlFor="name">Название</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={dish.name}
          onChange={changeDish}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Фото</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control"
          value={dish.image}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Цена</label>
        <input
          type="number"
          name="price"
          id="price"
          className="form-control"
          value={dish.price}
          onChange={changeDish}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={isLoading}
      >
        {isLoading && <ButtonSpinner />}
        {isEdit ? "Редактировать" : "Создать"}
      </button>
    </form>
  );
};

export default Form;
