import { OrderType } from "../../types/order";
import styled from "styled-components";
import OrderItem from "./OrderItem";

interface Props {
  orders: OrderType[];
}

const OrdersList = ({ orders }: Props) => {
  return (
    <Ul>
      {orders.map((order, index) => {
        return <OrderItem key={index} orders={order} />;
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
`;
export default OrdersList;
