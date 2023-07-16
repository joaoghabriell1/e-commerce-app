import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
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
