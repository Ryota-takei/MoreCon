import React, { memo } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

import { Post } from "../../../types/post/NewPots";
import { UseLikePost } from "../../../hooks/like/UseLikePost";

type Prop = {
  post: Post;
};

export const PostCardFooter: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const { onClickLikeCancel, onClickLike, likeCount, isLike } =
    UseLikePost(post);

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
          <Text>{post?.likes?.items?.length}欲しい</Text>
        </VStack>
        <VStack color="gray.500" w="33%" spacing="0">
          <Text>{post?.likes?.items?.length}</Text>
          <Text>欲しい</Text>
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
        >
          <AiOutlineLike size="20px" />
          <Text fontSize="sm">欲しい</Text>
        </VStack>
        <VStack
          color="gray.500"
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          w="33%"
          spacing="0"
        >
          <AiOutlineLike size="20px" />
          <Text fontSize="sm">欲しい</Text>
        </VStack>
      </Flex>
    </>
  );
});
