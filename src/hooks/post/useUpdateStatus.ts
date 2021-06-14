import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changePageState } from "../../features/page/pageSlice";
import { deletePosts } from "../../features/post/postSlice";
import { selectUser } from "../../features/user/userSlice";
import { updatePost } from "../../graphql/mutations";
import { Post } from "../../types/post/NewPots";

export const useUpdatePostStatus = (
  post: Post
) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);

  const onClickProduct = async () => {
    if (post?.type !== "new") return;
    const input = {
      id: post?.id,
      type: "inProduction",
      correspondingUserId: currentUser?.id,
    };

    try {
      await API.graphql(graphqlOperation(updatePost, { input }));
      if (post?.id) {
        dispatch(deletePosts(post?.id));
      }
      dispatch(changePageState("inProduction"));
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };

  return { onClickProduct };
};