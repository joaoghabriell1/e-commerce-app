import { useRef } from "react";
import { styled } from "styled-components";
import DeleteProductBtn from "./DeleteProductBtn";
import { cartItem } from "../../types/cartItem";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { changeAmount } from "../../store/cart/cart-slice";

const ShopBagProduct = ({
  title,
  description,
  price,
  thumbnail,
  amount,
  id,
}: cartItem) => {
  const dispatch = useAppDispatch();
  const amountInputRef = useRef<HTMLInputElement>(null);

  const amountChangeHandler = () => {
    const value = +amountInputRef.current!.value;

    if (value < 1) {
      amountInputRef.current!.value = "";
      return;
    }
    dispatch(changeAmount({ id: id, amount: value }));
  };

  return (
    <Container>
      <ProductThumbContainer>
        <ProductImg src={thumbnail} alt="product-GoBackIcon" />
      </ProductThumbContainer>
      <InfoContainer>
        <div>
          <Wrapper>
            <ProductTitle>{title}</ProductTitle>
            <DeleteProductBtn id={id} />
          </Wrapper>
          <Description>{description}</Description>
        </div>
        <AmountPriceWrapper>
          <AmountInput
            onChange={amountChangeHandler}
            ref={amountInputRef}
            type="number"
            min="1"
            max="10"
            defaultValue={amount}
            id="amount"
          />
          <Price>R$ {price},00</Price>
        </AmountPriceWrapper>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  background: var(--clr-dark-gray-200);
  max-width: 736px;
  border-radius: 10px;
  overflow: hidden;
  height: 210px;
  box-shadow: 0px 0px 1rem var(--clr-accent-green);
  @media (max-width: 400px) {
    height: 200px;
  }
`;

const ProductThumbContainer = styled.div`
  padding: 1rem;
`;

const ProductImg = styled.img`
  width: 250px;
  border-radius: 0.5rem;
  height: 100%;
  object-fit: cover;
  @media (max-width: 400px) {
    width: 100px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 1.6rem 2rem 2.4rem 3.1rem;
  display: grid;
  align-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

const Description = styled.p`
  padding-right: 3rem;
  font-size: 1.3rem;
  margin-top: 1.2rem;
`;

const AmountPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountInput = styled.input`
  color: var(--clr-text-200);
  width: 50px;
  padding-block: 0.8rem;
  padding-left: 1.2rem;
  border-radius: 8px;
  background: var(--clr-gray-200);
  outline: 0;
  border: 0;
  border: 1px solid #a8a8b3;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`;
export default ShopBagProduct;
