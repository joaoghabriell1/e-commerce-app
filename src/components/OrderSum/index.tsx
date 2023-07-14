import styled from "styled-components";

const OrderSum = () => {
  return (
    <Aside>
      <div>
        <Title>resumo do pedido</Title>
      </div>
      <div>
        <Wrapper>
          <FlexContainer>
            <span>Subtotal de produtos</span>
            <span>R$ 161,00</span>
          </FlexContainer>
          <FlexContainer>
            <span>Entrega</span>
            <span>R$ 40,00</span>
          </FlexContainer>
        </Wrapper>
        <FlexContainer>
          <Total>Total</Total>
          <Total>R$ 201,00</Total>
        </FlexContainer>
        <div>
          <Button>finalizar a compra</Button>
        </div>
      </div>
    </Aside>
  );
};

const Aside = styled.aside`
  padding-block: 1.6rem 2.4rem;
  padding-inline: 2.4rem;
  flex: 1;
  background: var(--clr-white);
  position: sticky;
  top: 2.5rem;
  height: 600px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid hsla(203, 15%, 88%, 1);
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2.9rem;
`;

const Total = styled.span`
  font-weight: bold;
  margin-bottom: 4rem;
`;
const Button = styled.button`
  width: 100%;
  font: inherit;
  text-transform: uppercase;
  background: hsl(121, 42%, 52%);
  border: 0;
  border-radius: 3px;
  color: var(--clr-gray-200);
  padding-block: 1.2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default OrderSum;
