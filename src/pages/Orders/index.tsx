import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { getOrders } from "../../store/orders/orders-async";
import { selectOrders } from "../../store/orders/orders-slice";

const Orders = () => {
  const orders = useAppSelector(selectOrders);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrders(id!));
  }, []);

  return (
    <>
      {orders.map((order, index) => {
        return <li key={index}>{order.city}</li>;
      })}
    </>
  );
};

export default Orders;
