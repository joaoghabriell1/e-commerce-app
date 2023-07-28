import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Ul } from "../../components/ProductsList";

const ProductsSkeletonLoading = () => {
  const dummyArray = new Array(8).fill(0);
  return (
    <SkeletonTheme baseColor="#4a4747" highlightColor="#939090">
      <Ul>
        {dummyArray.map((item, index) => {
          return (
            <Container key={index}>
              <Skeleton height={275} count={1} />
            </Container>
          );
        })}
      </Ul>
    </SkeletonTheme>
  );
};
const Container = styled.div`
  height: 357.8px;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
`;

export default ProductsSkeletonLoading;
