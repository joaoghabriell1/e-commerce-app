import {
  Form,
  InputContainer,
  ActionButton,
  Error,
  Message,
} from "./styles.ts";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { createUser } = authContext;

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  });

  const watchPassword = watch("password");

  return (
    <Form onSubmit={onSubmit}>
      <h3>Create Account</h3>
      <InputContainer invalid={errors.hasOwnProperty("email")}>
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
      <InputContainer invalid={errors.hasOwnProperty("password")}>
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
      <InputContainer invalid={errors.hasOwnProperty("confirmPassword")}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (val) => {
              if (watchPassword !== val) {
                return "Your passwords do not match.";
              }
            },
          })}
        />
        <div>
          {errors?.confirmPassword && (
            <Error>{errors.confirmPassword?.message}</Error>
          )}
        </div>
      </InputContainer>

      <ActionButton>Create Account</ActionButton>
      <Message>
        Don't have an account?{" "}
        <Link to="/">
          <span>
            <Link to="/auth?mode=login">LogIn</Link>
          </span>
        </Link>
      </Message>
    </Form>
  );
};
export default RegisterForm;
