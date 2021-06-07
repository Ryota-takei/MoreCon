import React, { memo, useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";

import { Post } from "../../../types/post/NewPots";
import { UseLikePost } from "../../../hooks/like/UseLikePost";
import { Alert } from "../../organism/alert/Alert";
import { UseUpdatePostStatus } from "../../../hooks/post/UseUpdatePostStatus";

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

  // カスタムフック
  const { onClickLikeCancel, onClickLike, likeCount, isLike } =
    UseLikePost(post);
  const {onClickProduct} = UseUpdatePostStatus(post, setIsOpen)

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
        <VStack color="gray.500" w="33%" spacing="0">
          <HStack spacing="0">
            <Text>{commentCount}</Text>
            <Text fontSize="xs">コメント</Text>
          </HStack>
        </VStack>
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
