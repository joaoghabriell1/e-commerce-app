import {
  Form,
  InputContainer,
  ActionButton,
  Error,
  Message,
} from "./styles.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";
import { Link } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { createUser, serverErrors, cleanServerErrors } = authContext;

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    cleanServerErrors();
    try {
      setLoading(true);
      const create = await createUser(email, password);
      if (create !== undefined) {
        navigate("/checkout");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  });

  const watchPassword = watch("password");

  return (
    <Form onSubmit={onSubmit}>
      <h3>Create Account</h3>
      {serverErrors && <p>{serverErrors.message}</p>}
      <InputContainer invalid={errors.hasOwnProperty("name") ? 1 : 0}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name required",
          })}
        />
        <div>{errors?.name && <Error>{errors.name.message}</Error>}</div>
      </InputContainer>
      <InputContainer invalid={errors.hasOwnProperty("email") ? 1 : 0}>
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
          type="text"
          placeholder="xxxxx@xxx.xxx"
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
      <InputContainer invalid={errors.hasOwnProperty("password") ? 1 : 0}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
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
      <InputContainer
        invalid={errors.hasOwnProperty("confirmPassword") ? 1 : 0}
      >
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

      <ActionButton>
        {loading ? <p>Connecting...</p> : "Create account"}
      </ActionButton>
      <Message>
        Already have an account?{" "}
        <Link to="/auth?mode=login">
          <span>LogIn</span>
        </Link>
      </Message>
    </Form>
  );
};
export default RegisterForm;
