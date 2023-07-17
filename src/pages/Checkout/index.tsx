import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { AuthType } from "../../store/auth-context";

const Checkout = () => {
  const authContext = useContext(AuthContext) as AuthType;
  const { user } = authContext;
  return <div>{user.uid}</div>;
};

export default Checkout;
