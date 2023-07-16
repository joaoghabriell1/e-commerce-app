import LoginForm from "./LoginForm";
import styled from "styled-components";

const Auth = () => {
  return (
    <Container>
      <LoginForm />
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
