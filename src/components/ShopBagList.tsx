import styled from "styled-components";
import ShopBagProduct from "./ShopBagProduct";

const ShopBagList = () => {
  return (
    <Ul>
      <ShopBagProduct />
    </Ul>
  );
};

const Ul = styled.ul`
  display: grid;
  gap: 1.6rem;
  margin-block: 2.3rem;
`;

export default ShopBagList;
