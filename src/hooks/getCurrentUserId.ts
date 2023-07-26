import { useContext, useState, useEffect } from "react";
import AuthContext from "../store/auth/auth-context";
import { AuthType } from "../store/auth/auth-context";

export const useGetCurrentUserId = () => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const authContext = useContext(AuthContext) as AuthType;
  const { user } = authContext;

  useEffect(() => {
    setCurrentUserId(user.uid);
  }, [user]);

  return { currentUserId };
};
