import { Link } from "react-router-dom";
import { MainContainer } from "../../globalSyles";
import styled from "styled-components";
import cart from "../../assets/shopping-bag.svg";

const Header = () => {
  return (
    <HeaderTag>
      <MainContainer>
        <HeaderContainer>
          <Logo>e-commerce</Logo>
          <Cart>
            <Link to="shop-bag">
              <img src={cart} alt="" />
            </Link>
          </Cart>
        </HeaderContainer>
      </MainContainer>
    </HeaderTag>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Cart = styled.div`
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
  font-weight: bold;
  font-size: 32px;
  &:hover {
    cursor: pointer;
  }
`;
export default Header;
