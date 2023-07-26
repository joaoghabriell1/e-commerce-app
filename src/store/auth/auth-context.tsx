import { ReactNode, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";
import { userType } from "../../types/user";

interface Props {
  children: ReactNode;
}
interface ServerAuthError {
  code: string;
  message: string;
}

export interface AuthType {
  user: any;
  createUser: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  serverErrors: ServerAuthError | null;
  cleanServerErrors: () => void;
}

const AuthContext = createContext<AuthType | null>(null);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [errors, setErrors] = useState<ServerAuthError | null>(null);

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      userStatus();
    };
  }, [onAuthStateChanged]);

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setErrors({
        code: error.code,
        message: error.message,
      });
    });
  };

  const createUserOnDataBase = async (user: userType) => {
    const postData = await fetch(
      `https://ecommerce-api-d47f1-default-rtdb.firebaseio.com/users.json`,
      {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(user),
      }
    );
  };

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const id = response.user.uid;
        const user = {
          id: id,
          cartItems: [],
          orders: [],
        };
        createUserOnDataBase(user);
      })

      .catch((error) => {
        setErrors({
          code: error.code,
          message: error.message,
        });
      });
  };

  const cleanServerErrors = () => {
    setErrors(null);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    user,
    logIn,
    logOut,
    createUser: createUser,
    serverErrors: errors,
    cleanServerErrors,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
