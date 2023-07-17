import AuthContext from "../../store/auth-context";
import { MainContainer } from "../../globalSyles";
import { useContext } from "react";
import { AuthType } from "../../store/auth-context";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const authContext = useContext(AuthContext) as AuthType;
  const { user, logOut } = authContext;

  if (!user) {
    return <Navigate to="/auth"></Navigate>;
  }

  const handleLogout = () => {
    logOut();
  };
  return (
    <div>
      <MainContainer>
        {user.uid}
        <button onClick={handleLogout}>logout</button>
      </MainContainer>
    </div>
  );
};

export default Checkout;
