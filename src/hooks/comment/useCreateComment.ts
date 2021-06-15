import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAppSelector } from "../../redux/app/hooks";
import { selectUser } from "../../redux/slices/user/userSlice";
import { createComment } from "../../graphql/mutations";
import { Post } from "../../types/post/NewPots";

type InputValue = {
  comment: string;
};

export const useCreateComment = (post: Post) => {
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const currentUser = useAppSelector(selectUser);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentChangeSchema),
  });

  const createNewComment = async (data: InputValue) => {
    setIsSubmitLoading(true);
    const input = {
      content: data.comment,
      postId: post?.id,
      timestamp: Math.floor(Date.now() / 1000),
      type: "comment",
      userId: currentUser?.id,
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
  return { isSubmitLoading, register, handleSubmit, createNewComment, errors };
};

const REQUIRE = "必須入力項目です";
const VIOLATION_COMMENT_COUNT = "タイトルは200文字以下で入力してください";

const commentChangeSchema = yup.object().shape({
  comment: yup.string().required(REQUIRE).max(200, VIOLATION_COMMENT_COUNT),
});
