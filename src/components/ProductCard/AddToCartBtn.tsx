import { styled } from "styled-components";
import cart from "../../assets/cart.svg";

const AddToCartBtn = () => {
  return (
    <BtnContainer>
      <button>
        <CartImg src={cart} alt="" />
      </button>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  button {
    background: none;
    border: 0;
  }
`;

const CartImg = styled.img`
  img {
    filter: invert(0%) sepia(95%) saturate(19%) hue-rotate(322deg)
      brightness(98%) contrast(100%);
  }
`;

export default AddToCartBtn;
