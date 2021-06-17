import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import { CreateLikeMutation } from "../../API";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/slices/user/userSlice";
import { createLike, deleteLike, updatePost } from "../../graphql/mutations";
import { Post } from "../../types/post/NewPots";

type CreateLike = {
  data: CreateLikeMutation;
};

export const useLikePost = (post: Post) => {
  const loginUser = useAppSelector(selectUser);
  const [isFetching, setIsFetching] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isCurrentUserLike, setIsCurrentUserLike] = useState(false);
  const [likeID, setLikeID] = useState<string | undefined>("");

  const onClickAddLike = async () => {
    if (isCurrentUserLike || isFetching) return;
    setIsFetching(true);

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

      setIsCurrentUserLike(true);
      setLikeID(res?.data.createLike?.id);
      setLikeCount((preValue) => preValue + 1);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsFetching(false);
    }
  };

  const onClickCancelLike = async () => {
    if (!isCurrentUserLike || isFetching) return;
    setIsFetching(true);

    const likeInput = {
      id: likeID,
    };

    const postInput = {
      id: post?.id,
      likeCount: likeCount - 1,
    };

    try {
      await API.graphql(
        graphqlOperation(deleteLike, { input: { ...likeInput } })
      );
      await API.graphql(
        graphqlOperation(updatePost, { input: { ...postInput } })
      );
      setIsCurrentUserLike(false);
      setLikeID(undefined);
      setLikeCount((preValue) => preValue - 1);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    const isLikePost = post?.likes?.items?.find(
      (item) => item?.userId === loginUser?.id
    );
    setLikeID(isLikePost?.id);

    //ログインしているユーザーがいいねしたかを確認
    if (isLikePost) {
      setIsCurrentUserLike(true);
    }
    setLikeCount(post?.likes?.items?.length ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  return { onClickCancelLike, onClickAddLike, likeCount, isCurrentUserLike };
};
