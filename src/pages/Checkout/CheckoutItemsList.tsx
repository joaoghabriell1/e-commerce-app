import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux-hooks";

const CheckoutItemsList = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const total = useAppSelector((state) => state.cart.total);

  return (
    <ItemsList>
      {cart.map((item) => {
        return (
          <CheckoutItem key={item.id}>
            <ImageContainer>
              <img src={item.thumbnail} alt="" />
            </ImageContainer>
            <InfoContainer>
              <h4>{item.title}</h4>
              <div>R${item.price},00</div>
              <div>
                <span>Quantity: </span> <span>{item.amount}</span>
              </div>
            </InfoContainer>
          </CheckoutItem>
        );
      })}
      <div>
        <h4>Cart Total: R${total.toFixed(2)}</h4>
      </div>
    </ItemsList>
  );
};

const ItemsList = styled.ul`
  display: grid;
  gap: 1rem;
`;

const CheckoutItem = styled.li`
  display: flex;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
  background: red;
  height: 100px;
  img {
    width: 130px;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: grid;
  margin-left: 1rem;
  & > div:nth-child(3) {
    align-self: flex-end;
  }
`;

export default CheckoutItemsList;
