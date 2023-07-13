import { styled } from "styled-components";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard";

interface Props {
  productsList: Product[];
}
const ProductsList = ({ productsList }: Props) => {
  return (
    <Ul>
      {productsList.map(
        ({
          id,
          price,
          title,
          description,
          discountPercentage,
          rating,
          category,
          thumbnail,
          images,
          stock,
          brand,
        }) => {
          return (
            <ProductCard
              id={id}
              title={title}
              price={price}
              description={description}
              discountPercentage={discountPercentage}
              rating={rating}
              stock={stock}
              brand={brand}
              category={category}
              thumbnail={thumbnail}
              images={images}
            />
          );
        }
      )}
    </Ul>
  );
};

const Ul = styled.ul`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default ProductsList;
