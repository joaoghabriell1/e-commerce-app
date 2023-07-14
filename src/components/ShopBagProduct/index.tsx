import { styled } from "styled-components";
import goBackIcon from "../../assets/goback-icon.svg";
import DeleteProductBtn from "./DeleteProductBtn";

const ShopBagProduct = () => {
  return (
    <Container>
      <div>
        <ProductImg src={goBackIcon} alt="product-GoBackIcon" />
      </div>
      <InfoContainer>
        <div>
          <Wrapper>
            <ProductTitle>Caneca de cerâmica rústica</ProductTitle>
            <DeleteProductBtn />
          </Wrapper>
          <Description>
            Aqui vem um texto descritivo do Descriptionroduto, esta caixa de
            texto servirá apenas de exemplo para que simule algum texto que
            venha a ser inserido nesse campo, descrevendo tal produto.
          </Description>
        </div>
        <AmountPriceWrapper>
          <AmountInput type="number" min="1" defaultValue={1} id="amount" />
          <Price>R$ 40,00</Price>
        </AmountPriceWrapper>
      </InfoContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background: var(--clr-white);
  max-width: 736px;
  border-radius: 10px;
`;

const ProductImg = styled.img`
  width: 250px;
  height: 210px;
`;

const InfoContainer = styled.div`
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
  font-size: 1.3rem;
  margin-top: 1.2rem;
`;

const AmountPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountInput = styled.input`
  width: 65px;
  padding-block: 0.8rem;
  padding-left: 1.2rem;
  border-radius: 8px;
  background: var(--clr-gray-200);
  outline: 0;
  border: 0;
  border: 1px solid #a8a8b3;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`;
export default ShopBagProduct;
