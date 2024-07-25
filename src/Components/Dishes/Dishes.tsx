import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { Spinner } from "react-bootstrap";
import { selectDishes, selectLoading } from "./dishesSlice";
import { fetchDishes } from "./dishesThunks";
import ClientDish from "./ClientDish";

const Dishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const dishesLoading = useAppSelector(selectLoading);

  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <h3>Pizza:</h3>
      <div className="pizza-wrapper">
        {dishesLoading ? (
          <Spinner />
        ) : (
          dishes.map((dish) => <ClientDish key={dish.id} dish={dish} />)
        )}
      </div>
    </>
  );
};

export default Dishes;
