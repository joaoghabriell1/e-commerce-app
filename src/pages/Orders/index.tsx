import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { selectOrders } from "../../store/orders/orders-slice";
import { getOrders } from "../../store/orders/orders-async";
import { MainContainer } from "../../globalSyles";
import { useParams } from "react-router-dom";
import OrdersList from "./OrdersList";
import { useEffect } from "react";

const Orders = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrders(id!));
  }, []);

  return (
    <>
      <MainContainer>
        <OrdersList id={id!} orders={orders} />
      </MainContainer>
    </>
  );
};

export default Orders;
