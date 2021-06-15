import { useState } from "react";
import { useSelector } from "react-redux";
import {selectIsAdmin} from "../../redux/slices/user/userSlice"

type AuthStatus = "AMAZON_COGNITO_USER_POOLS" | "API_KEY";

export const useChangeAuth = () => {
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
