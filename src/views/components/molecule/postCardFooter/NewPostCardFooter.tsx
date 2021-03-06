import React, { memo, useRef, useState } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import { Post } from "../../../../types/post/NewPots";
import { Alert } from "../../organism/alert/Alert";
import { SNSPop } from "../../organism/pop/SNSPop";
import { useAppSelector } from "../../../../redux/hooks";
import { PostStatusButton } from "../../atom/button/PostStatusButton";
import { PostCardFooterLike } from "./PostCardFooterLike";
import { PostCardFooterProduction } from "./PostCardFooterProduction";
import { selectUser } from "../../../../redux/slices/user/userSlice";
import { CommentCount } from "../comment/CommentCount";
import { useLikePost } from "../../../../hooks/like/useLikePost";
import { useUpdatePostStatus } from "../../../../hooks/post/useUpdateStatus";
import { CommentIconText } from "../comment/CommentIconText";
import { useHistory } from "react-router";

type Prop = {
  post: Post;
  setIsOpenComment: React.Dispatch<React.SetStateAction<boolean>>;
  commentCount: number;
};

export const NewPostCardFooter: React.VFC<Prop> = memo((props) => {
  const { post, setIsOpenComment, commentCount } = props;
  const currentUser = useAppSelector(selectUser);
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const onCloseAlert = () => setIsOpen(false);

  // カスタムフック(likeの切り替え、like数、ログインしているユーザーがlikeしているかの確認)
  const { onClickCancelLike, onClickAddLike, likeCount, isCurrentUserLike } =
    useLikePost(post);
  //制作するボタンを押した際にpostのステータスの変更
  const { onClickProduct } = useUpdatePostStatus(post);

  const onClickToUserPage = (id: string | undefined | null) => {
    history.push(`/user/${id}`);
  };

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
              _hover={{ cursor: "pointer" }}
              onClick={() =>
                onClickToUserPage(post?.correspondingUser?.displayId)
              }
            >{`${post?.correspondingUser?.name}さんが実現済み`}</Text>
          </VStack>
        )}
        {post?.type === "inProduction" && (
          <VStack w="33%" spacing="0" color="blue.400">
            <Text
              fontWeight="bold"
              fontSize="sm"
              p="1"
              _hover={{ cursor: "pointer" }}
              onClick={() => onClickToUserPage(post?.correspondingUser?.displayId)}
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
        {/* 製作者用のボタン */}
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
