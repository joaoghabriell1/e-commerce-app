import { cartItem } from "../../../types/cartItem";
import styled from "styled-components";

interface Props {
  order: cartItem[];
}

const ItemsList = ({ order }: Props) => {
  return (
    <Ul>
      {order.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <Img>
              <img src={item.thumbnail} alt="item-thumbnail" />
            </Img>
            <Info>
              <div>
                {item.title}
                <Quantity>x {item.amount}</Quantity>
              </div>
              <div>U$ {item.price.toFixed(2)}</div>
              <Description>{item.description}</Description>
            </Info>
          </ItemContainer>
        );
      })}
    </Ul>
  );
};
const Ul = styled.ul`
  display: grid;
  padding: 1rem;
  gap: 1rem;
`;
const ItemContainer = styled.li`
  display: flex;
  gap: 1rem;
`;
const Img = styled.div`
  height: 130px;
  width: 150px;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Info = styled.div`
  display: grid;
  align-content: start;
`;

const Quantity = styled.div`
  margin-left: 1rem;
  font-weight: bold;
  display: inline-block;
  font-size: 1.4rem;
`;
const Description = styled.p`
  max-width: 30ch;
  text-align: justify;
  font-size: 1.4rem;
`;

export default ItemsList;
