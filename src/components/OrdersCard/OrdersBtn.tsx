import { Dispatch, SetStateAction } from "react";

interface Props {
  setShowOrders: Dispatch<SetStateAction<boolean>>;
}

const OrdersBtn = ({ setShowOrders }: Props) => {
  const handleClick = () => {
    setShowOrders((prev) => !prev);
  };

  return <button onClick={handleClick}>orders</button>;
};

export default OrdersBtn;
