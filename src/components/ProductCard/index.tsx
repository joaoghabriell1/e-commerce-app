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
        <div>
          <Link to={`/product/${id}`}>
            <Title>{title}</Title>
          </Link>
        </div>
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
  max-width: 400px;
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
  &:hover {
    color: hsla(16, 100%, 76%, 1);
  }
`;

const Price = styled.div`
  padding-top: 0.8rem;
  font-weight: bold;
`;

export default ProductCard;
