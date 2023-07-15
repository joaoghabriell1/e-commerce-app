import { useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const data = useLoaderData() as string;
  return <div>{data}</div>;
};

export default ProductPage;

export const Loader = async ({ params }: any) => {
  const { productId } = params;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const data = await response.json();
  return productId;
};
