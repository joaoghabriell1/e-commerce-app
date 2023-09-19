import ApiServices from "../../../api/apiServices";
import { OrderType } from "../../../types/order";
import styled from "styled-components";
import ItemsList from "./ItemsList";
import { useEffect, useState } from "react";
import Header from "./Header";

interface Props {
  orders: OrderType;
  id: string;
}

const OrderItem = ({ id, orders }: Props) => {
  const [userName, setUserName] = useState<string | null>(null);
  const { total, date, order } = orders;
  const { getUserInfo } = ApiServices;

  useEffect(() => {
    const getInfo = async () => {
      const response = await getUserInfo(id);
      setUserName(response.data.name);
    };
    try {
      getInfo();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <OrderContainer>
      <Header userName={userName} total={total} date={date} />
      <ItemsList order={order} />
    </OrderContainer>
  );
};

const OrderContainer = styled.li`
  border: 1px solid black;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--clr-dark-gray-200);
`;
export default OrderItem;
