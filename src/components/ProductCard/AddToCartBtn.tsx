import { styled } from "styled-components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { cartItem } from "../../types/cartItem";
import cart from "../../assets/add-to-cart..svg";
import { addProduct } from "../../store/cart-slice";

interface Props {
  cartInfo: cartItem;
}

const AddToCartBtn = ({ cartInfo }: Props) => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    const product = {
      ...cartInfo,
    };
    dispatch(addProduct(product));
  };

  return (
    <BtnContainer>
      <button onClick={clickHandler}>
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
