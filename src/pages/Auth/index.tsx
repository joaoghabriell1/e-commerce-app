import { useContext } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { AuthType } from "../../store/auth-context";
import AuthContext from "../../store/auth-context";

const Auth = () => {
  const authContext = useContext(AuthContext) as AuthType;
  const { user } = authContext;
  const [searchParams] = useSearchParams();
  let isLogin = searchParams.get("mode");
  if (!isLogin) isLogin = "login";

  return (
    <Container>
      {isLogin === "login" ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 8.7rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Auth;
