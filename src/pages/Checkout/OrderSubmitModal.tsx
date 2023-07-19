import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderSubmitModal = ({ setSubmited }: Props) => {
  return (
    <Container>
      <Card>
        <h3>Order Submited Succesfully!</h3>
        <Link
          onClick={() => {
            setSubmited(false);
            document.body.style.overflow = "auto";
          }}
          to="/"
        >
          <Button>Continue Shopping</Button>
        </Link>
      </Card>
    </Container>
  );
};

const Button = styled.button`
  font-family: inherit;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  background: orange;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const Card = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  gap: 1rem;
  background: var(--clr-white);
  padding: 3rem;
  border-radius: 1rem;
`;
const Container = styled.div`
  position: absolute;
  background: #00000097;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default OrderSubmitModal;
