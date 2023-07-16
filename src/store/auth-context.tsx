import { ReactNode, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

interface Props {
  children: ReactNode;
}

export interface AuthType {
  user: any;
  createUser: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthType | null>(null);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      userStatus();
    };
  }, [onAuthStateChanged]);

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const value = { user, logIn, logOut, createUser: createUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
