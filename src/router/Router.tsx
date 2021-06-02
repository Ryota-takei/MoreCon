import { Route, Switch } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { PostsPage } from "../components/pages/PostsPage";
import { SignIn } from "../components/pages/SignIn";
import { SignUp } from "../components/pages/SignUp";
import { TopPage } from "../components/pages/TopPage";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { userRoutes } from "./UserRoutes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HeaderLayout>
          <TopPage />
        </HeaderLayout>
      </Route>
      <Route path="/posts">
        <HeaderLayout>
          <PostsPage />
        </HeaderLayout>
      </Route>
      <Route path="/signup">
        <HeaderLayout>
          <SignUp />
        </HeaderLayout>
      </Route>
      <Route path="/signin">
        <HeaderLayout>
          <SignIn />
        </HeaderLayout>
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
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="*">
        <HeaderLayout>
          <Page404 />
        </HeaderLayout>
      </Route>
    </Switch>
  );
};
