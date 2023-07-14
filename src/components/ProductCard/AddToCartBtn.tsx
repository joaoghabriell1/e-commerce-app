import { styled } from "styled-components";
import cart from "../../assets/add-to-cart..svg";

const AddToCartBtn = () => {
  return (
    <BtnContainer>
      <button>
        <CartImg src={cart} alt="cart-btn" />
      </button>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  button {
    background: hsla(1, 100%, 100%, 0.7);
    border-radius: 5px;
    border: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

const CartImg = styled.img`
  width: 25px;
`;

export default AddToCartBtn;
