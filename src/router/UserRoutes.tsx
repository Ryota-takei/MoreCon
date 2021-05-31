import { Page404 } from "../components/pages/Page404";
import { ProfilePage } from "../components/pages/ProfilePage";
import { UserPage } from "../components/pages/UserPage";

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
