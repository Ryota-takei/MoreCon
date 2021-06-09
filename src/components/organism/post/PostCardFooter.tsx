import React, { memo, useRef, useState } from "react";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiComment, BiShareAlt } from "react-icons/bi";

import { Post } from "../../../types/post/NewPots";
import { useLikePost } from "../../../hooks/like/useLikePost";
import { Alert } from "../../organism/alert/Alert";
import { useUpdatePostStatus } from "../../../hooks/post/useUpdatePostStatus";
import { Pop } from "../pop/Pop";

type Prop = {
  post: Post;
  setIsOpenComment: React.Dispatch<React.SetStateAction<boolean>>;
  commentCount: number;
};

export const PostCardFooter: React.VFC<Prop> = memo((props) => {
  const { post, setIsOpenComment, commentCount } = props;
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
        <VStack
          color="gray.500"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          w="33%"
          spacing="0"
          onClick={isLike ? onClickLikeCancel : onClickLike}
        >
          {isLike ? (
            <>
              <Box color="blue.400">
                <AiFillLike size="20px" />
              </Box>
              <Text fontSize="xs" color="blue.400">
                want
              </Text>
            </>
          ) : (
            <>
              <AiOutlineLike size="20px" />
              <Text fontSize="xs">want</Text>
            </>
          )}
        </VStack>
        <VStack
          color="gray.500"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          w="33%"
          spacing="0"
          onClick={() => setIsOpenComment((preVal) => !preVal)}
        >
          <BiComment size="20px" />
          <Text fontSize="xs">コメント</Text>
        </VStack>
        <VStack color="gray.500" w="33%" spacing="0">
          <HStack h="100%">
            <Text
              fontSize="md"
              bg="blue.300"
              borderRadius="15px"
              _hover={{ cursor: "pointer", bg: "blue.500" }}
              color="white"
              py="1"
              px="5"
              fontWeight="bold"
              onClick={() => setIsOpen(true)}
            >
              制作する
            </Text>
          </HStack>
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
