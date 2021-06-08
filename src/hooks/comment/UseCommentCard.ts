import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Observable } from "zen-observable-ts";
import { API, graphqlOperation } from "aws-amplify";
import produce from "immer";
import { onCreateComment } from "../../graphql/subscriptions";
import {
  ListCommentsSortedByTimestampQuery,
  OnCreateCommentSubscription,
} from "../../API";
import { Comment } from "../../types/comment/CommentType";
import { createComment } from "../../graphql/mutations";
import { listCommentsSortedByTimestamp } from "../../graphql/queries";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { Post } from "../../types/post/NewPots";

type InputValue = {
  comment: string;
};

type Comments = {
  data: ListCommentsSortedByTimestampQuery;
};

export const useCommentCard = (
  setCommentCount: React.Dispatch<React.SetStateAction<number>>,
  post: Post
) => {
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isFetchingLoading, setIsFetchLoading] = useState(false);
  const [comments, setComments] = useState<Comment[] | null>();
  const loginUser = useAppSelector(selectUser);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentChangeSchema),
  });

  const checkKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.key === "Enter" && e.preventDefault();
  };

  const onClickComment = async (data: InputValue) => {
    setIsSubmitLoading(true);
    const input = {
      content: data.comment,
      postId: post?.id,
      timestamp: Math.floor(Date.now() / 1000),
      type: "comment",
      userId: loginUser?.id,
    };

    try {
      await API.graphql(graphqlOperation(createComment, { input }));
      setValue("comment", "");
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsSubmitLoading(false);
    }
  };
  const getComments = async () => {
    setIsFetchLoading(true);
    try {
      const comments = (await API.graphql(
        graphqlOperation(listCommentsSortedByTimestamp, {
          postId: post?.id,
          sortDirection: "DESC",
          limit: 8,
        })
      )) as Comments;

      setComments(comments.data.listCommentsSortedByTimestamp?.items);
      console.log(comments);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsFetchLoading(false);
    }
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  useEffect(() => {
    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onCreateComment));
    if (subscription instanceof Observable) {
      const sub = subscription.subscribe({
        next: (msg: { value: { data: OnCreateCommentSubscription } }) => {
          const comment = msg.value.data.onCreateComment as Comment;
          setComments((preComments) => {
            const newComments = produce(preComments, (addComment) => {
              addComment?.unshift(comment);
              console.log(preComments);
              console.log(addComment);
            });
            console.log(newComments);
            return newComments;
          });
          setCommentCount((preVal) => preVal + 1);
          console.log(comment);
        },
      });

      unsubscribe = () => {
        sub.unsubscribe();
      };
    }
    return unsubscribe;
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    comments,
    isFetchingLoading,
    onClickComment,
    isSubmitLoading,
    handleSubmit,
    checkKeyDown,
    errors,
    register,
  };
};

const REQUIRE = "必須入力項目です";
const VIOLATION_COMMENT_COUNT = "タイトルは200文字以下で入力してください";

const commentChangeSchema = yup.object().shape({
  comment: yup.string().required(REQUIRE).max(200, VIOLATION_COMMENT_COUNT),
});
