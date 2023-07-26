import { styled } from "styled-components";
import { Product } from "../../types/product";
import ProductCard from "../ProductCard";

interface Props {
  productsList: Product[];
  especificProductFilter: string | null;
}

const ProductsList = ({ productsList, especificProductFilter }: Props) => {
  if (especificProductFilter && productsList.length === 0) {
    return <p>No products were found!</p>;
  }

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
              key={id}
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
  margin-block: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem;
`;

export default ProductsList;
