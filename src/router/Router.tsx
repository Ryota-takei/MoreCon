import { Route, Switch } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { PostsPage } from "../components/pages/PostsPage";
import { SignIn } from "../components/pages/SignIn";
import { SignUp } from "../components/pages/SignUp";
import { TopPage } from "../components/pages/TopPage";
import { userRoutes } from "./UserRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      <Route path="/posts">
        <PostsPage />
      </Route>
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
