import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { Spinner } from "react-bootstrap";
import AdminToolbar from "../../Components/Toolbar/AdminToolbar";
import {
  deleteOrder,
  fetchOrderData,
} from "../../Components/Dishes/dishesThunks";
import {
  selectCartLoading,
  selectOrders,
} from "../../Components/Cart/cartSlice";

const Orders: React.FC = () => {
  const orders = useAppSelector(selectOrders);
  const loading = useAppSelector(selectCartLoading);
  const dispatch = useAppDispatch();

  const removeDish = async (id: string) => {
    await dispatch(deleteOrder(id));
    await dispatch(fetchOrderData());
  };

  useEffect(() => {
    dispatch(fetchOrderData());
  }, [dispatch]);

  if (!orders || Object.keys(orders).length === 0) {
    return (
      <>
        <AdminToolbar />
        <h1 className="fs-1 fw-bold text-center">Нет заказов.</h1>
      </>
    );
  }

  return (
    <>
      <AdminToolbar />
      <div className="container w-75">
        <div className="mt-2">
          <div className="row gap-4">
            <h4 className="mb-2 fs-1 fw-bold">Заказы</h4>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Загрузка...</span>
              </Spinner>
            ) : (
              Object.keys(orders).map((orderId: string) => {
                return (
                  <div key={orderId} className="col-5 border border-success">
                    <div className="row">
                      <div className="col-6">
                        <h3 className="fs-3 fw-medium">Блюда:</h3>
                        <ul>
                          {orders[orderId].map((dish) => (
                            <li key={dish.dish.id}>
                              <p>{dish.dish.name}</p>
                              <p>Количество: {dish.amount}</p>
                            </li>
                          ))}
                        </ul>
                        <button
                          className="btn btn-success mb-3 mt-auto d-block"
                          onClick={() => removeDish(orderId)}
                        >
                          Выполнить заказ
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
