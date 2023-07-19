import { useContext } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import AuthContext, { AuthType } from "../../store/auth-context";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Auth = () => {
  const authContext = useContext(AuthContext) as AuthType;
  const { user } = authContext;
  const [searchParams] = useSearchParams();

  let isLogin = searchParams.get("mode");
  if (!isLogin) isLogin = "login";

  if (user) {
    return <Navigate to="/checkout"></Navigate>;
  }

  return (
    <>
      <Container>
        <Logo>
          <Link to="/">e-commerce</Link>
        </Logo>
        {isLogin === "login" ? <LoginForm /> : <RegisterForm />}
      </Container>
    </>
  );
};

const Logo = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  text-align: center;
  &:hover {
    color: red;
  }
`;

const Container = styled.div`
  height: calc(100vh - 8.7rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Auth;
