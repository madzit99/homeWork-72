import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiDish } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import {
  selectLoading,
  selectOneDish,
} from "../../Components/Dishes/dishesSlice";
import { fetchDish, updateDish } from "../../Components/Dishes/dishesThunks";
import Spinner from "../../Components/Spinner/Spinner";
import Form from "../../Components/Form/Form";
import AdminToolbar from "../../Components/Toolbar/AdminToolbar";

const EditDish: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectLoading);
  const dish = useAppSelector(selectOneDish);

  const { id } = useParams() as { id: string };

  useEffect(() => {
    dispatch(fetchDish(id));
  }, [dispatch, id]);

  const onSubmit = async (dish: ApiDish) => {
    await dispatch(updateDish({ id, dish }));
    navigate("/admin");
  };

  const existingDish = dish
    ? {
        ...dish,
        price: dish.price.toString(),
      }
    : undefined;

  let formSection = <Spinner />;

  if (!loading) {
    if (dish) {
      formSection = (
        <Form
          onSubmit={onSubmit}
          existingDish={existingDish}
          isEdit
          isLoading={loading}
        />
      );
    } else {
      formSection = <h4>Not found!</h4>;
    }
  }

  return (
    <>
      <AdminToolbar />
      <div className="container w-50">
        <div className="row mt-2">
          <div className="col">{formSection}</div>
        </div>
      </div>
    </>
  );
};

export default EditDish;
