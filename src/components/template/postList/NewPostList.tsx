import { memo } from "react";
import { Box, Flex, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectIsNewPost,
  selectPosts,
  changePostStatus,
} from "../../../features/post/newPostSlice";
import { PostCard } from "../../organism/post/PostCard";
import { useGetNewPostAndSubScribe } from "../../../hooks/post/useGetNewPostAndSubScribe";
import { useGetWantedPostAndSubScribe } from "../../../hooks/post/useGetWantedPostAndSubScribe";

export const NewPostList: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts);
  const isNewPost = useAppSelector(selectIsNewPost);
  const dispatch = useAppDispatch();

  //カスタムフック（新しいポストの取得とサブスクリプション)
  const { isGetNewPostLoading } = useGetNewPostAndSubScribe();
  //注目度の高いポストの取得(like順)
  const { isGetWantedPostLoading } = useGetWantedPostAndSubScribe();

  console.log("hoge");
  console.log(posts);

  return (
    <Box minH="100Vh" w="100%" pt={{ base: "80px", md: "30px" }} p="2">
      <Flex
        borderRadius="10px"
        w="80%"
        border="1px"
        borderColor="blue.200"
        mx="auto"
      >
        <Box
          bg={isNewPost ? "blue.300" : "white"}
          color={isNewPost ? "white" : "blue.300"}
          w="50%"
          textAlign="center"
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
          _hover={{ cursor: "pointer" }}
          onClick={() => dispatch(changePostStatus(true))}
        >
          新着順
        </Box>
        <Box
          color={isNewPost ? "blue.300" : "white"}
          bg={isNewPost ? "white" : "blue.300"}
          w="50%"
          textAlign="center"
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
          _hover={{ cursor: "pointer" }}
          onClick={() => dispatch(changePostStatus(false))}
        >
          注目順
        </Box>
      </Flex>
      {isGetNewPostLoading || isGetWantedPostLoading ? (
        <Box w="100%" textAlign="center" pt="6">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <VStack spacing="3" mt="4">
            {posts.map((post) => (
              <PostCard post={post} key={post?.id} isPosts={true} />
            ))}
          </VStack>
        </>
      )}
    </Box>
  );
});
