import {
  Form,
  InputContainer,
  ActionButton,
  Error,
  Message,
  ServerErrorMessageContainer,
} from "./styles.ts";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth/auth-context.tsx";
import { AuthType } from "../../store/auth/auth-context.tsx";
import { Link } from "react-router-dom";
import ServerErrorMessages from "./ServerErrors.ts";
import { useLocation } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const location = useLocation();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { logIn, serverErrors, cleanServerErrors } = authContext;

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    cleanServerErrors();
    try {
      setLoading(true);
      const status = await logIn(email, password);
      if (status === undefined) return;
      if (location.state == "/shop-bag") {
        navigate("/checkout");
      } else {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <h3>Log-In</h3>
      {serverErrors ? (
        <ServerErrorMessageContainer>
          {(ServerErrorMessages as Record<string, string>)[serverErrors.code]}
        </ServerErrorMessageContainer>
      ) : null}
      <InputContainer invalid={errors.hasOwnProperty("email") ? 1 : 0}>
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
          defaultValue="example@example.com"
          placeholder="xxxxx@xxx.xxx"
          type="text"
          {...register("email", {
            required: "E-mail required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        <div>{errors?.email && <Error>{errors.email.message}</Error>}</div>
      </InputContainer>
      <InputContainer invalid={errors.hasOwnProperty("email") ? 1 : 0}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          defaultValue="123456"
          placeholder="password"
          {...register("password", {
            required: "Password required",
            minLength: {
              value: 6,
              message: "Your password has to be at least 6 characters",
            },
          })}
        />
        <div>
          {errors?.password && <Error>{errors.password.message}</Error>}
        </div>
      </InputContainer>

      <ActionButton>{loading ? <p>Connecting...</p> : "login"}</ActionButton>
      <Message>
        Don't have an account?{" "}
        <span>
          <Link
            onClick={() => {
              cleanServerErrors();
            }}
            to="/auth?mode=signup"
          >
            Register
          </Link>
        </span>
      </Message>
    </Form>
  );
};

export default LoginForm;
