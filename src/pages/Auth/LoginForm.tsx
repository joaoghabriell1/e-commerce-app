import {
  Form,
  InputContainer,
  ActionButton,
  Error,
  Message,
} from "./styles.ts";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";
import { Link } from "react-router-dom";

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

  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { logIn } = authContext;

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      await logIn(email, password);
      navigate("/checkout");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      console.log("cu");
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <h3>Log-In</h3>
      <InputContainer invalid={errors.hasOwnProperty("email") ? 1 : 0}>
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
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
          <Link to="/auth?mode=signup">Register</Link>
        </span>
      </Message>
    </Form>
  );
};

export default LoginForm;
