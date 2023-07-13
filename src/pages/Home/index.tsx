import { useAppSelector } from "../../hooks/redux-hooks";

const Home = () => {
  const products = useAppSelector((state) => state.products.products);

  return <div></div>;
};

export default Home;
