import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./views/chakraTheme/theme";


import { useChangeAuth } from "./hooks/auth/useChangeAuth";
import { useAppSelector } from "./redux/hooks";
import { selectIsAdmin } from "./redux/slices/user/userSlice";

import Amplify from "aws-amplify";
import config from "./aws-exports";
import { HeaderLayout } from "./views/components/template/HeaderLayout";

Amplify.configure(config);

function App() {
  const { authStatus, changeAuth } = useChangeAuth();
  const isAdmin = useAppSelector(selectIsAdmin);

  Amplify.configure({
    ...config,
    aws_appsync_authenticationType: authStatus,
  });

  useEffect(() => {
    changeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout>
          <Router />
        </HeaderLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
