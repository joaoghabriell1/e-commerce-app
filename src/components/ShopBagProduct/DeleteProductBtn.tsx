import thrashCan from "../../assets/thrash-can.svg";
import styled from "styled-components";

const DeleteProductBtn = () => {
  return (
    <Button>
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
