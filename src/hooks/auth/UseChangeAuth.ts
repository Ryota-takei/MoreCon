import { useState } from "react";
import { useSelector } from "react-redux";
import {selectIsAdmin} from "../../features/user/userSlice"

type AuthStatus = "AMAZON_COGNITO_USER_POOLS" | "API_KEY";

export const UseChangeAuth = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const [authStatus, setAuthStatus] = useState<AuthStatus>("API_KEY");
  const changeAuth = () => {
    if (isAdmin) {
      setAuthStatus("AMAZON_COGNITO_USER_POOLS");
    } else {
      setAuthStatus("API_KEY");
    }
  };
  return { authStatus, changeAuth };
};
