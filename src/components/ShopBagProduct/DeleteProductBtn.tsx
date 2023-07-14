import thrashCan from "../../assets/thrash-can.svg";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { removeItem } from "../../store/cart-slice";

interface Props {
  id: number;
}
const DeleteProductBtn = ({ id }: Props) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <Button onClick={clickHandler}>
      <img src={thrashCan} alt="thrash can icon" />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: 0;
  img {
    aspect-ratio: 1/1;
    width: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default DeleteProductBtn;
