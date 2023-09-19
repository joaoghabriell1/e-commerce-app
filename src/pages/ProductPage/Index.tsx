import styled from "styled-components";
import { MainContainer } from "../../globalSyles";
import { useLoaderData } from "react-router-dom";
import { Product } from "../../types/product";
import { json } from "react-router-dom";
import AddToCartBtn from "../../components/ProductCard/AddToCartBtn";
import ReturnBtn from "../ShopBag/ReturnBtn";
import { cartItem } from "../../types/cartItem";

const ProductPage = () => {
  const data = useLoaderData() as Product;
  const { id, thumbnail, description, price, title, category } = data;
  const addToCartInfo: cartItem = {
    title,
    price,
    id,
    thumbnail,
    description,
    amount: 1,
  };
  return (
    <>
      <MainContainer>
        <ButtonContainer>
          <ReturnBtn />
        </ButtonContainer>
        <SectionWrapper>
          <ProductContainer>
            <img src={thumbnail} alt="product thumbnail" />
          </ProductContainer>
          <ProductInfo>
            <div>
              <Category>{category}</Category>
              <Title>{title}</Title>
              <div>
                <Price>U$ {price},00</Price>
              </div>
              <Description>
                <h3>Description</h3>
                <p>{description}</p>
              </Description>
            </div>
            <AddToCartBtn cartInfo={addToCartInfo} />
          </ProductInfo>
        </SectionWrapper>
      </MainContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  margin-block: 2.4rem;
`;

const Category = styled.span`
  color: var(--clr-text-200);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;
const SectionWrapper = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ProductContainer = styled.div`
  height: 580px;
  max-width: 600px;
  img {
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  color: var(--clr-text-300);
  padding-left: 3.2rem;
  display: grid;
  grid-template-rows: 1fr auto;
  @media (max-width: 700px) {
    padding-left: 0;
  }
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin-top: 1rem;
  line-height: 150%;
`;

const Price = styled.p`
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 5.8rem;
  h3 {
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.5rem;
  }
`;
export const Loader = async ({ params }: any) => {
  const { productId } = params;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!response.ok) {
    throw json({
      messae: "Could not fetch the product datails, please try again!",
    });
  }
  return response;
};

export default ProductPage;
