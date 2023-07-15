import { MainContainer } from "../../globalSyles";
import { useAppSelector } from "../../hooks/redux-hooks";
import styled from "styled-components";
import ProductsList from "../../components/ProductsList";
import FilterNav from "../../components/FilterNav";

const Home = () => {
  const { categoryFilter, products, especificProductFilter } = useAppSelector(
    (state) => state.products
  );

  let filteredProducts = products.filter(({ category }) => {
    return category?.includes(categoryFilter);
  });

  if (especificProductFilter) {
    filteredProducts = products.filter(({ title }) => {
      let cleanTitle = title.toLowerCase().trim();
      return cleanTitle.includes(especificProductFilter);
    });
  }

  const filters = products
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <>
      <MainContainer>
        <Header>
          <FilterNav categoryFilter={categoryFilter} filters={filters} />
        </Header>
        <ProductsList
          especificProductFilter={especificProductFilter}
          productsList={filteredProducts}
        />
      </MainContainer>
    </>
  );
};

const Header = styled.header`
  margin-top: 3.5rem;
  margin-bottom: 8rem;
`;

export default Home;
