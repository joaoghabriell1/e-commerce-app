import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useGetCurrentUserId } from "../../hooks/getCurrentUserId";
import { getOrders } from "../../store/orders/orders-async";
import OrdersBtn from "./OrdersBtn";
import OrdersContainer from "./OrdersContainer";

const OrdersCard = () => {
  const { currentUserId } = useGetCurrentUserId();
  const { orders } = useAppSelector((state) => state.orders);
  const dispatch = useAppDispatch();
  const [showOrders, setShowOrders] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getOrders(currentUserId!));
  }, [currentUserId]);

  return (
    <>
      <OrdersBtn setShowOrders={setShowOrders} />
      {showOrders && <OrdersContainer orders={orders || []} />}
    </>
  );
};

export default OrdersCard;
