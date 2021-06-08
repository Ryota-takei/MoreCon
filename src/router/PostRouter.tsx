import { Page404 } from '../components/pages/Page404'
import {  SpecificPost } from '../components/pages/SpecificPost'
import { PostsPage } from '../components/pages/PostsPage'

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
