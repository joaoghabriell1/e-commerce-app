import styled from "styled-components";

const ShopBagHeading = () => {
  return (
    <header>
      <div>
        <Heading>SEU CARRINHO</Heading>
        <div>
          <span>Total (3 produtos) </span>
          <CartTotal>R$161,00</CartTotal>
        </div>
      </div>
    </header>
  );
};

const Heading = styled.h2`
  font-weight: bold;
  color: var(--clr-gray-300);
  margin-bottom: 0.6rem;
`;

const CartTotal = styled.span`
  font-weight: bold;
`;

export default ShopBagHeading;
