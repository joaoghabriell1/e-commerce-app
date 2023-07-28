import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Ul } from "../../components/ProductsList";

const ProductsSkeletonLoading = () => {
  const dummyArray = new Array(8).fill(0);
  return (
    <SkeletonTheme baseColor="#e2e5e7" highlightColor="hsl(200, 20%, 95%)">
      <Ul>
        {dummyArray.map((item, index) => {
          return (
            <Container key={index}>
              <Skeleton height={275} count={1} />
              <InfoContainer>
                <Skeleton style={{ marginBlock: ".7rem" }} count={2} />
              </InfoContainer>
            </Container>
          );
        })}
      </Ul>
    </SkeletonTheme>
  );
};

const InfoContainer = styled.div``;
const Container = styled.div`
  height: 357.8px;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
`;

export default ProductsSkeletonLoading;
