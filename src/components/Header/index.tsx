import { useAppSelector } from "../../hooks/redux-hooks";
import { Link } from "react-router-dom";
import { MainContainer } from "../../globalSyles";
import styled from "styled-components";
import SearchBar from "../SearchBar";
import cart from "../../assets/shopping-bag.svg";
import productAmount from "../../utils/numberOfProducts";
import UserCard from "../UserCard";

const Header = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const amountOfProducts = productAmount(cartItems);
  return (
    <HeaderTag>
      <MainContainer>
        <HeaderContainer>
          <Logo>
            <Link to="">e-commerce</Link>
          </Logo>
          <SearchBar />
          <Cart>
            <Link to="shop-bag">
              <img src={cart} alt="" />
            </Link>
            <AmountOfProducts>{amountOfProducts}</AmountOfProducts>
          </Cart>
          <UserCard />
        </HeaderContainer>
      </MainContainer>
    </HeaderTag>
  );
};

const AmountOfProducts = styled.div`
  aspect-ratio: 1/1;
  line-height: 1;
  padding-left: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 1rem;
  background: red;
  color: var(--clr-white);
  border-radius: 50%;
  height: 17px;
  top: 1.5rem;
  right: -1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Cart = styled.div`
  position: relative;
  height: 20px;
  img {
    height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const HeaderTag = styled.header`
  background: var(--clr-white);
  padding-block: 16px;
`;

const Logo = styled.div`
  white-space: nowrap;
  flex: 1;
  font-weight: bold;
  font-size: 32px;
  &:hover {
    cursor: pointer;
  }
`;
export default Header;
