import { styled } from "styled-components";
import { Product } from "../../types/product";
import { Link } from "react-router-dom";

const ProductCard = ({ price, title, thumbnail, id }: Product) => {
  return (
    <Container>
      <Link to={`/product/${id}`}>
        <Thumbnail>
          <img src={thumbnail} alt="product-thumbnail" />
        </Thumbnail>
      </Link>
      <TitlePriceWrapper>
        <Link to={`/product/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Price>U$ {price},00</Price>
      </TitlePriceWrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #1e1e1e;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  position: relative;
  max-width: 400px;
  padding: 1rem;
`;

const TitlePriceWrapper = styled.div`
  display: grid;
`;

const Thumbnail = styled.div`
  height: 275px;
  overflow: hidden;
  border-radius: 0.5rem;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.h3`
  color: #fff;
  opacity: 0.87;
  font-weight: 500;
  font-size: 1.6rem;
  border-bottom: 1px solid #dce2e5;
  padding-bottom: 0.8rem;
  &:hover {
    color: #bb86fc;
  }
  padding-top: 1rem;
`;

const Price = styled.div`
  padding-top: 0.8rem;
  font-weight: 400;
  opacity: 0.6  ;
`;

export default ProductCard;
