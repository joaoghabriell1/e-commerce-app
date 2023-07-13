import { styled } from "styled-components";
import { Product } from "../../types/product";
import AddToCartBtn from "./AddToCartBtn";
import star from "../../assets/star.svg";

const ProductCard = ({ price, rating, title, thumbnail }: Product) => {
  return (
    <Container>
      <Thumbnail>
        <AddToCartBtn />
        <img src={thumbnail} alt="product-thumbnail" />
      </Thumbnail>
      <TitlePriceWrapper>
        <div>
          <Title>{title}</Title>
        </div>
        <Rating>
          <div>
            <img src={star} alt="rating-star" />
          </div>
          <span>{rating}</span>
        </Rating>
      </TitlePriceWrapper>
      <Price>U$ {price},00</Price>
    </Container>
  );
};

const Container = styled.div`
  background: var(--clr-gray-100);
  padding: 1rem;
  border-radius: 20px;
  display: grid;
  position: relative;
`;

const TitlePriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Thumbnail = styled.div`
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  color: black;
`;

const Rating = styled.div`
  display: flex;
  font-size: 14px;
  img {
    height: 20px;
  }
`;

const Price = styled.div`
  font-weight: bold;
`;

export default ProductCard;
