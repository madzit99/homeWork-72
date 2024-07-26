import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { Spinner } from "react-bootstrap";
import { selectDishes, selectLoading } from "./dishesSlice";
import { fetchDishes } from "./dishesThunks";
import ClientDish from "./ClientDish";

interface Props {
  isAdmin?: boolean;
}

const Dishes: React.FC<Props> = ({ isAdmin }) => {
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const dishesLoading = useAppSelector(selectLoading);

  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <>
      <h3>Пицца:</h3>
      <div className="pizza-wrapper">
        {dishesLoading ? (
          <Spinner />
        ) : (
          dishes.map((dish) => (
            <ClientDish key={dish.id} dish={dish} isAdmin={isAdmin} />
          ))
        )}
      </div>
    </>
  );
};

export default Dishes;
