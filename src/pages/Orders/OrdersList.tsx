import { OrderType } from "../../types/order";
import styled from "styled-components";
import OrderItem from "./OrderItem";

interface Props {
  id: string;
  orders: OrderType[];
}

const OrdersList = ({ id, orders }: Props) => {
  return (
    <Ul>
      {orders.map((order, index) => {
        return <OrderItem id={id} key={index} orders={order} />;
      })}
    </Ul>
  );
};

const Ul = styled.ul`
  margin-block: 1rem;
  display: grid;
  gap: 1rem;
`;
export default OrdersList;
