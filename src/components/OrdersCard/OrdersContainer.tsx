import { OrderType } from "../../types/order";

interface Props {
  orders: OrderType[];
}

const OrdersContainer = ({ orders }: Props) => {
  return (
    <div>
      {orders[0] && (
        <ul>
          {orders?.map((order) => {
            return <li>{order.city}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default OrdersContainer;
