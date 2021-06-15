import { Route, Switch } from "react-router-dom";
import { Page404 } from "../views/components/pages/Page404";
import { SignIn } from "../views/components/pages/SignIn";
import { SignUp } from "../views/components/pages/SignUp";
import { TopPage } from "../views/components/pages/TopPage";
import { postRouter } from "./PostRouter";
import { userRoutes } from "./UserRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route
        path="/posts"
        render={({ match: { url } }) => (
          <Switch>
            {postRouter.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route
        path="/user"
        render={({ match: { url } }) => (
          <Switch>
            {userRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
