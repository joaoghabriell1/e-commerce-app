import { MainContainer } from "../../globalSyles";
import { useAppSelector } from "../../hooks/redux-hooks";
import styled from "styled-components";
import ProductsList from "../../components/ProductsList";
import FilterNav from "../../components/FilterNav";

const Home = () => {
  const categoryFilter = useAppSelector(
    (state) => state.products.categoryFilter
  );

  const products = useAppSelector((state) => state.products.products);

  const filteredProducts = products.filter(({ category }) => {
    return category?.includes(categoryFilter);
  });

  const filters = products
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <>
      <MainContainer>
        <Header>
          <FilterNav categoryFilter={categoryFilter} filters={filters} />
        </Header>
        <ProductsList productsList={filteredProducts} />
      </MainContainer>
    </>
  );
};

const Header = styled.header`
  margin-top: 3.5rem;
  margin-bottom: 8rem;
`;

export default Home;
