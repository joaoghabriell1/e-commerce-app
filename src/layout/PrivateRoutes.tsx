import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth/auth-context";
import { useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return <>{user ? <Outlet /> : <Navigate to="auth" state={pathname} />}</>;
};

export default PrivateRoutes;
