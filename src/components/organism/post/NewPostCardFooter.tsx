import React, { memo, useRef, useState } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import { Post } from "../../../types/post/NewPots";
import { Alert } from "../alert/Alert";
import { useUpdatePostStatus } from "../../../hooks/post/useUpdatePostStatus";
import { SNSPop } from "../pop/SNSPop";
import { useAppSelector } from "../../../app/hooks";
import { PostStatusButton } from "../../atom/postCardFooter/PostStatusButton";
import { PostCardFooterLike } from "../../molecule/postCardFooter.tsx/PostCardFooterLike";
import { PostCardFooterProduction } from "../../molecule/postCardFooter.tsx/PostCardFooterProduction";
import { selectUser } from "../../../features/user/userSlice";
import { CommentCount } from "../../molecule/postCardFooter.tsx/CommentCount";
import { CommentIconText } from "../../molecule/postCardFooter.tsx/CommentIconText";
import { useLikePost } from "../../../hooks/like/useLikePost";

type Prop = {
  post: Post;
  setIsOpenComment: React.Dispatch<React.SetStateAction<boolean>>;
  commentCount: number;
};

export const NewPostCardFooter: React.VFC<Prop> = memo((props) => {
  const { post, setIsOpenComment, commentCount } = props;
  const currentUser = useAppSelector(selectUser);
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const onCloseAlert = () => setIsOpen(false);

  // カスタムフック(likeの切り替え、like数、ログインしているユーザーがlikeしているかの確認)
  const { onClickCancelLike, onClickAddLike, likeCount, isCurrentUserLike } =
    useLikePost(post);
  //制作するボタンを押した際にpostのステータスの変更
  const { onClickProduct } = useUpdatePostStatus(post, setIsOpen);

  return (
    <>
      <Flex borderTop="1px" color="gray.200" p="1">
        <VStack color="gray.500" w="33%" spacing="0">
          <HStack>
            <Text>{likeCount}</Text>
            <Text fontSize="xs">want</Text>
          </HStack>
        </VStack>
        <VStack color="gray.500" w="33%" spacing="0">
          <CommentCount commentCount={commentCount} />
        </VStack>
        <SNSPop post={post} />
      </Flex>
      <Flex borderTop="1px" color="gray.200" p="1">
        {post?.type === "new" && (
          <PostCardFooterLike
            isLike={isCurrentUserLike}
            onClickLike={onClickAddLike}
            onClickLikeCancel={onClickCancelLike}
          />
        )}
        {post?.type === "finish" && (
          <VStack w="33%" spacing="0" color="blue.400">
              <Text
                fontWeight="bold"
                fontSize="sm"
                p="1"
                >{`${post?.correspondingUser?.name}さんが実現済み`}</Text>
            </VStack>
        )}
        {post?.type === "inProduction" && (
          <VStack w="33%" spacing="0" color="blue.400">
            <Text
              fontWeight="bold"
              fontSize="sm"
              p="1"
            >{`${post?.correspondingUser?.name}さんが制作中。コメントで応援しよう！！`}</Text>{" "}
          </VStack>
        )}
        <CommentIconText setIsOpenComment={setIsOpenComment} />
        <VStack color="gray.500" w="33%">
          {post?.type === "new" && (
            <HStack h="100%">
              <PostStatusButton
                onClick={() => setIsOpen(true)}
                text="制作する"
              />
            </HStack>
          )}
          {post?.type === "inProduction" &&
            post?.correspondingUserId === currentUser?.id && (
              <Box h="100%">
                <PostCardFooterProduction post={post} />
              </Box>
            )}
          {post?.type === "inProduction" &&
            post?.correspondingUserId !== currentUser?.id && (
              <HStack h="100%">
                <PostStatusButton text="制作中" />
              </HStack>
            )}
          {post?.type === "finish" && (
            <HStack h="100%">
              <PostStatusButton text="完成" />
            </HStack>
          )}
        </VStack>
      </Flex>
      <Alert
        isOpen={isOpen}
        onClose={onCloseAlert}
        cancelRef={cancelRef}
        dialogBody={`『${post?.title}』を作成しますか?`}
        buttonText="制作する"
        onClick={onClickProduct}
      />
    </>
  );
});
