import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./chakraTheme/theme";

import { UseChangeAuth } from "./hooks/auth/UseChangeAuth";
import { useAppSelector } from "./app/hooks";
import { selectIsAdmin } from "./features/user/userSlice";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

function App() {
  const { authStatus, changeAuth } = UseChangeAuth();
  const isAdmin = useAppSelector(selectIsAdmin);

  Amplify.configure({
    ...config,
    aws_appsync_authenticationType: authStatus,
  });

  useEffect(()=> {
    changeAuth()
  },[isAdmin])

    console.log(authStatus, isAdmin)
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
