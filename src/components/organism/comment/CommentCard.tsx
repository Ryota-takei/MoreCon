import React, { memo, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";

import { NormalButton } from "../../atom/button/NormalButton";
import { Post } from "../../../types/post/NewPots";
import { Spinner } from "@chakra-ui/spinner";
import { CommentList } from "./CommentList";
import { useGetCommentAndSubscribe } from "../../../hooks/comment/useGetCommentAndSubscribe";
import { Avatar } from "@chakra-ui/avatar";
import { useCreateComment } from "../../../hooks/comment/useCreateComment";
import { Comment } from "../../../types/comment/CommentType";
import { Loading } from "../../atom/Loading/Loading";
import { useGetImage } from "../../../hooks/function/useGetImage";
import { useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/user/userSlice";

type Prop = {
  post: Post;
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CommentCard: React.VFC<Prop> = memo((props) => {
  const { post, setCommentsCount } = props;
  const [comments, setComments] = useState<Comment[] | null>(null);
  const  currentUser = useAppSelector(selectUser)
  const { imageUrl } = useGetImage(currentUser);

  //カスタムフック (コメントの初回取得、追加取得、サブスクリプション)
  const {
    isGetNewCommentLoading,
    isGetAdditionalCommentLoading,
    getAdditionalComments,
  } = useGetCommentAndSubscribe(post, setCommentsCount, setComments);

  //新規投稿機能
  const { isSubmitLoading, register, handleSubmit, createNewComment, errors } =
    useCreateComment(post);

  const checkKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.key === "Enter" && e.preventDefault();
  };

  return (
    <Box w="100%" p="2" border="1px" borderColor="gray.100" borderRadius="10px">
      {isGetNewCommentLoading ? (
        <Box w="100%" textAlign="center">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <form
            onSubmit={handleSubmit(createNewComment)}
            onKeyDown={(e) => checkKeyDown}
          >
            <HStack>
              <Avatar src={imageUrl} boxSize="40px" />
              <Text fontSize="14px" color="red.500">
                {errors.comment?.message}
              </Text>
              <Textarea
                rows={2}
                placeholder="コメントする"
                resize="none"
                {...register("comment")}
              />
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="投稿する"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                type="submit"
                isLoading={isSubmitLoading}
              />
            </HStack>
          </form>
          {comments?.map((comment) => (
            <CommentList comment={comment} key={comment?.id} />
          ))}
           {isGetAdditionalCommentLoading ? (
              <Loading />
            ) : (
              <VStack mt="3">
                <NormalButton
                  hover={{ bg: "blue.500" }}
                  text="Read More"
                  bg="blue.300"
                  color="white"
                  onClick={getAdditionalComments}
                />
              </VStack>
            )}
        </>
      )}
    </Box>
  );
});
