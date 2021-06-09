import React, { memo, useRef, useState } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { BiComment, BiShareAlt } from "react-icons/bi";

import { Post } from "../../../types/post/NewPots";
import { useLikePost } from "../../../hooks/like/useLikePost";
import { Alert } from "../../organism/alert/Alert";
import { useUpdatePostStatus } from "../../../hooks/post/useUpdatePostStatus";
import { Pop } from "../pop/Pop";
import { useAppSelector } from "../../../app/hooks";
import { selectPage } from "../../../features/page/pageSlice";
import { PostStatusButton } from "../../atom/postCardFooter/PostStatusButton";
import { PostCardFooterLike } from "../../molecule/postCardFooter.tsx/PostCardFooterLike";
import { PostCardFooterProduction } from "../../molecule/postCardFooter.tsx/PostCardFooterProduction";

type Prop = {
  post: Post;
  setIsOpenComment: React.Dispatch<React.SetStateAction<boolean>>;
  commentCount: number;
};

export const PostCardFooter: React.VFC<Prop> = memo((props) => {
  const { post, setIsOpenComment, commentCount } = props;
  const currentPage = useAppSelector(selectPage);
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const onCloseAlert = () => setIsOpen(false);

  // カスタムフック(likeの切り替え、like数、ログインしているユーザーがlikeしているかの確認)
  const { onClickLikeCancel, onClickLike, likeCount, isLike } =
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
          <HStack spacing="0">
            <Text>{commentCount}</Text>
            <Text fontSize="xs">コメント</Text>
          </HStack>
        </VStack>
        <Pop post={post}>
          <VStack color="gray.600" w="33%" spacing="0">
            <HStack _hover={{ cursor: "pointer", opacity: "0.7" }}>
              <BiShareAlt size="25px" />
            </HStack>
          </VStack>
        </Pop>
      </Flex>
      <Flex borderTop="1px" color="gray.200" p="1">
        {currentPage === "newPosts" && (
          <PostCardFooterLike
            isLike={isLike}
            onClickLike={onClickLike}
            onClickLikeCancel={onClickLikeCancel}
          />
        )}
        {currentPage === "inProduction" && (
          <VStack w="33%" spacing="0" color="blue.400">
            <Text
              fontWeight="bold"
              fontSize="sm"
              p="1"
            >{`${post?.correspondingUser?.name}さんが制作中。コメントで応援しよう！！`}</Text>
          </VStack>
        )}
        <VStack
          color="gray.500"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          w="33%"
          spacing="0"
          onClick={() => setIsOpenComment((preVal) => !preVal)}
        >
          <HStack h="100%">
            <VStack spacing="0">
              <BiComment size="20px" />
              <Text fontSize="xs">コメント</Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack color="gray.500" w="33%" >
          {currentPage === "newPosts" && (
            <HStack h="100%">
              <PostStatusButton
                onClick={() => setIsOpen(true)}
                text="制作する"
              />
            </HStack>
          )}
          {currentPage === "inProduction" && (
            <Box h="100%">
              <PostCardFooterProduction post={post} />
            </Box>
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
