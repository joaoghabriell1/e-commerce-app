import { MainContainer } from "../../globalSyles";
import styled from "styled-components";
import OrderSum from "../../components/OrderSum";
import ShopBagHeading from "./Heading";
import ShopBagList from "../../components/ShopBagList";
import ReturnBtn from "./ReturnBtn";

const ShopBag = () => {
  return (
    <MainContainer>
      <Section>
        <div>
          <ReturnBtn />
          <ShopBagHeading />
          <div>
            <ShopBagList />
          </div>
        </div>
        <OrderSum />
      </Section>
    </MainContainer>
  );
};
const Section = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: 2.5rem;
`;

export default ShopBag;
