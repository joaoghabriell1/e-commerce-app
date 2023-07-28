import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { getOrders } from "../../store/orders/orders-async";

const Orders = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.orders);
  console.log(id);

  useEffect(() => {
    dispatch(getOrders(id!));
  }, []);

  console.log(orders);

  return (
    <>
      {orders.map((order, index) => {
        return <li key={index}>{order.city}</li>;
      })}
    </>
  );
};

export default Orders;
