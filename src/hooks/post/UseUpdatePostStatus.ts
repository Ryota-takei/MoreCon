import { API, graphqlOperation } from "aws-amplify";
import { useAppDispatch } from "../../app/hooks";
import { deletePosts } from "../../features/post/newPostSlice";
import { updatePost } from "../../graphql/mutations";
import { Post } from "../../types/post/NewPots";

export const useUpdatePostStatus = (
  post: Post,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
const dispatch = useAppDispatch()

  const onClickProduct = async () => {
    const input = {
      id: post?.id,
      type: "inProduction",
    };

    try {
      const res = await API.graphql(graphqlOperation(updatePost, { input }));
      if (post?.id) {
        dispatch(deletePosts(post?.id));
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsOpen(false);
    }
  };

  return {onClickProduct}
};
