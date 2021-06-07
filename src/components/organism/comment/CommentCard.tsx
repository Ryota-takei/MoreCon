import React, { memo} from "react";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Textarea } from "@chakra-ui/textarea";

import { NormalButton } from "../../atom/button/NormalButton";
import { selectUser } from "../../../features/user/userSlice";
import { useAppSelector } from "../../../app/hooks";
import NoImage from "../../../Image/NoImage.png";
import { Post } from "../../../types/post/NewPots";
import { Spinner } from "@chakra-ui/spinner";
import { CommentList } from "./CommentList";
import { UseCommentCard } from "../../../hooks/comment/UseCommentCard";

type Prop = {
  post: Post;
  imageUrl: string;
  setCommentCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CommentCard: React.VFC<Prop> = memo((props) => {
  const { post, imageUrl, setCommentCount } = props;
  const loginUser = useAppSelector(selectUser);

  //カスタムフック
  const {
    comments,
    isFetchingLoading,
    isSubmitLoading,
    handleSubmit,
    register,
    onClickComment,
    checkKeyDown,
    errors,
  } = UseCommentCard(setCommentCount, post);

  return (
    <Box w="100%" p="2" border="1px" borderColor="gray.100" borderRadius="10px">
      {isFetchingLoading ? (
        <Box w="100%" textAlign="center">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onClickComment)}
            onKeyDown={(e) => checkKeyDown}
          >
            <HStack>
              <Image
                src={loginUser?.image ? imageUrl : NoImage}
                alt="プロフィール画像"
                borderRadius="full"
                boxSize="40px"
              />
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
        </>
      )}
    </Box>
  );
});
