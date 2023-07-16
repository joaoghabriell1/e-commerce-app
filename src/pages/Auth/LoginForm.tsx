import { useForm, Resolver } from "react-hook-form";
import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { AuthType } from "../../store/auth-context";

type FormValues = {
  email: string;
  password: string;
};

/* const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
          email: {
            type: "required",
            message: "Email is required.",
          },
        }
      : {},
  };
}; */

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
    reset,
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const authContext = useContext(AuthContext) as AuthType;
  const { logIn } = authContext;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn("", "");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit((data) => {})}>
      <h3>Log-In</h3>
      <InputContainer>
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
          type="text"
          {...register("email", {
            required: "ads required",
            minLength: {
              value: 5,
              message: "teste",
            },
          })}
        />
        <div>{errors?.email && <p>{errors.email.message}</p>}</div>
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "erro required",
          })}
        />
        <div>{errors?.password && <p>{errors.password.message}</p>}</div>
      </InputContainer>

      <ActionButton>login</ActionButton>
      <div>Don't have an account? Register</div>
    </Form>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-size: 14px;
    margin-bottom: 4px;
    font-weight: bold;
    color: var(--clr-gray-100);
  }
  input {
    background: var(--clr-gray-200);
    border: 0;
    border-radius: 5px;
    padding: 1rem;
  }
`;

export const ActionButton = styled.button`
  margin-block: 3rem;
`;

export const Form = styled.form`
  min-width: 400px;
  display: grid;
  align-items: center;
  background: var(--clr-white);
  border-radius: 1rem;
  padding: 1.5rem 1.5rem;
  gap: 1rem;
  h3 {
    text-align: start;
    font-size: W 2.5rem;
    margin-bottom: 3rem;
  }
`;

export default LoginForm;
