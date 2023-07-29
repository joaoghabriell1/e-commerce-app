import { cartItem } from "../../../types/cartItem";
import styled from "styled-components";

interface Props {
  order: cartItem[];
}

const ItemsList = ({ order }: Props) => {
  return (
    <Ul>
      <li>
        {order.map((item, index) => {
          return (
            <ItemContainer key={index}>
              <Img>
                <img src={item.thumbnail} alt="item-thumbnail" />
              </Img>
              <Info>
                <div>{item.title}</div>
                <Description>{item.description}</Description>
              </Info>
            </ItemContainer>
          );
        })}
      </li>
    </Ul>
  );
};
const Ul = styled.ul`
  padding: 1rem;
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

const Description = styled.p`
  max-width: 30ch;
  text-align: justify;
`;

export default ItemsList;
