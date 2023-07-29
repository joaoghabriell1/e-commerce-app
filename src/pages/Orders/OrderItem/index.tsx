import { OrderType } from "../../../types/order";
import styled from "styled-components";
import ItemsList from "./ItemsList";
import Header from "./Header";

interface Props {
  orders: OrderType;
}

const OrderItem = ({ orders }: Props) => {
  const { total, date, order } = orders;

  return (
    <OrderContainer>
      <Header total={total} date={date} />
      <ItemsList order={order} />
    </OrderContainer>
  );
};

const OrderContainer = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 1rem;
`;
export default OrderItem;
