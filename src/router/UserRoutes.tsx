import { Page404 } from "../views/components/pages/Page404";
import { ProfilePage } from "../views/components/pages/ProfilePage";
import { UserPage } from "../views/components/pages/UserPage";

export const userRoutes = [
  {
    path: "/",
    exact: true,
    children: <ProfilePage />,
  },
  {
    path: "/:userId",
    exact: false,
    children: <UserPage />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
