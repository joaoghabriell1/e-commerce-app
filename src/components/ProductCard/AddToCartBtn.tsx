import { styled } from "styled-components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { cartItem } from "../../types/cartItem";
import shoppingBag from "../../assets/shopping-bag.svg";
import { addProduct } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";

interface Props {
  cartInfo: cartItem;
}

const AddToCartBtn = ({ cartInfo }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickHandler = () => {
    const product = {
      ...cartInfo,
    };
    dispatch(addProduct(product));
    navigate("/");
  };

  return (
    <BtnContainer onClick={clickHandler}>
      <CartImg src={shoppingBag} alt="cart-btn" />
      <span>Add to Cart</span>
    </BtnContainer>
  );
};

const BtnContainer = styled.button`
  display: flex;
  font-family: inherit;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  justify-content: center;
  gap: 1rem;
  padding-block: 1rem;
  border-radius: 5px;
  background: hsla(203, 78%, 31%, 1);
  span {
    color: var(--clr-white);
    text-transform: uppercase;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    zoom: 1.1;
  }
`;

const CartImg = styled.img`
  aspect-ratio: 1/1;
  width: 25px;
  filter: invert(100%) sepia(0%) saturate(225%) hue-rotate(190deg)
    brightness(106%) contrast(1000%);
`;

export default AddToCartBtn;
