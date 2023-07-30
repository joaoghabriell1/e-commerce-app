import { useAuth } from "../store/auth/auth-context";
import { TailSpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const PrivateRoutes = () => {
  const { user, loadingCurrentUser } = useAuth();
  const { pathname } = useLocation();

  if (loadingCurrentUser) {
    return (
      <LoadingContainer>
        <TailSpin color="black" width="300" />;
      </LoadingContainer>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to="auth" state={pathname} />}</>;
};

const LoadingContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PrivateRoutes;
