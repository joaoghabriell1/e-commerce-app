import { useAppSelector } from "../../hooks/redux-hooks";
import ProductsList from "../../components/ProductsList";
import { MainContainer } from "../../globalSyles";

const Home = () => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <>
      <MainContainer>
        <ProductsList productsList={products} />
      </MainContainer>
    </>
  );
};

export default Home;
