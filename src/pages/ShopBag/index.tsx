import { useAppSelector } from "../../hooks/redux-hooks";
import ShopBagList from "../../components/ShopBagList";
import { MainContainer } from "../../globalSyles";
import OrderSum from "../../components/OrderSum";
import styled from "styled-components";
import ShopBagHeading from "./Heading";
import ReturnBtn from "./ReturnBtn";

const ShopBag = () => {
  const cartItems = useAppSelector((state) => state!.cart.items);
  const cartTotal = useAppSelector((state) => state.cart.total);
  const cartIsEmpty = cartItems.length === 0;

  return (
    <MainContainer>
      <Section>
        <div>
          <ReturnBtn />
          <ShopBagHeading
            cartTotal={cartTotal}
            cartItems={cartItems}
            cartIsEmpty={cartIsEmpty}
          />
          <div>
            <ShopBagList cartIsEmpty={cartIsEmpty} cartItems={cartItems} />
          </div>
        </div>
        {!cartIsEmpty ? <OrderSum cartTotal={cartTotal} /> : null}
      </Section>
    </MainContainer>
  );
};

const Section = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 2.5rem;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export default ShopBag;
