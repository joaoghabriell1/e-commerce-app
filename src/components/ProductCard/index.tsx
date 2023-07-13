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
        {/*     <Rating>
          <div>
            <img src={star} alt="rating-star" />
          </div>
          <span>{rating}</span>
        </Rating> */}
        <Price>U$ {price},00</Price>
      </TitlePriceWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: var(--clr-white);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  position: relative;
`;

const TitlePriceWrapper = styled.div`
  padding: 0.9rem 1.2rem;
  display: grid;
`;

const Thumbnail = styled.div`
  height: 275px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  color: var(--clr-gray-100);
  font-weight: 400;
  font-size: 1.6rem;
  border-bottom: 1px solid #dce2e5;
  padding-bottom: 0.8rem;
`;

const Rating = styled.div`
  display: flex;
  font-size: 14px;
  img {
    height: 20px;
  }
`;

const Price = styled.div`
  padding-top: 0.8rem;
  font-weight: bold;
`;

export default ProductCard;
