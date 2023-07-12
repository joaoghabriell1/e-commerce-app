import styled from "styled-components";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import { MainContainer } from "../../globalSyles";

const Header = () => {
  return (
    <HeaderTag>
      <MainContainer>
        <HeaderContainer>
          <Logo>e-commerce</Logo>
          <Cart>
            <img src={cart} alt="" />
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
`;

const HeaderTag = styled.header`
  background: var(--clr-black-100);
  padding-block: 36px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 32px;
`;
export default Header;
