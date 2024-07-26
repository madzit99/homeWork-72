import React from "react";
import AdminToolbar from "../../Components/Toolbar/AdminToolbar";
import Form from "../../Components/Form/Form";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { selectLoading } from "../../Components/Dishes/dishesSlice";
import { ApiDish } from "../../types";
import { createDish, fetchDishes } from "../../Components/Dishes/dishesThunks";
import { useNavigate } from "react-router-dom";

const NewDish: React.FC = () => {
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (dish: ApiDish) => {
    await dispatch(createDish(dish));
    await dispatch(fetchDishes());
    navigate("/admin");
  };
  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <Form onSubmit={onSubmit} isLoading={loading} />
      </div>
    </>
  );
};

export default NewDish;
