import { Page404 } from '../views/components/pages/Page404'
import {  SpecificPost } from '../views/components/pages/SpecificPost'
import { PostsPage } from '../views/components/pages/PostsPage'

export const postRouter = [
  {
    path: "/",
    exact: true,
    children: <PostsPage />,
  },
  {
    path: "/:postId",
    exact: false,
    children: <SpecificPost />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
]
