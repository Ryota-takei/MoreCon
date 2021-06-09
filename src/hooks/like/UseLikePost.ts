import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { CreateLikeMutation } from "../../API";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { createLike, deleteLike, updatePost } from "../../graphql/mutations";
import { Post } from "../../types/post/NewPots";

type CreateLike = {
  data: CreateLikeMutation;
};

export const useLikePost = (post: Post) => {
  const loginUser = useAppSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [likeInformation, setLikeInformation] =
    useState<string | undefined>("");

  const onClickLike = async () => {
    if (likeInformation || isLoading) return;
    setIsLoading(true);

    const likeInput = {
      userId: loginUser?.id,
      postId: post?.id,
    };

    const postInput = {
      id: post?.id,
      likeCount: likeCount + 1,
    };

    try {
      const res = (await API.graphql(
        graphqlOperation(createLike, { input: { ...likeInput } })
      )) as CreateLike;

      await API.graphql(
        graphqlOperation(updatePost, { input: { ...postInput } })
      );

      setIsLike(true);
      setLikeInformation(res?.data.createLike?.id);
      setLikeCount((preValue) => preValue + 1);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  const onClickLikeCancel = async () => {
    if (!likeInformation || isLoading) return;
    setIsLoading(true);

    const likeInput = {
      id: likeInformation,
    };

    const postInput = {
      id: post?.id,
      likeCount: likeCount -1
    }

    try {
      await API.graphql(graphqlOperation(deleteLike, { input: {...likeInput} }));
      await API.graphql(graphqlOperation(updatePost,{input: {...postInput}}))
      setIsLike(false);
      setLikeInformation(undefined);
      setLikeCount((preValue) => preValue - 1);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const isLikePost = post?.likes?.items?.find(
      (item) => item?.userId === loginUser?.id
    );
    //ログインしているユーザーがいいねしたかを確認
    setLikeInformation(isLikePost?.id);
    if (isLikePost) {
      setIsLike(true);
    }
    setLikeCount(post?.likes?.items?.length ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  return { onClickLikeCancel, onClickLike, likeCount, isLike };
};
