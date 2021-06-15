import { memo } from "react";
import { Box, Flex, VStack } from "@chakra-ui/layout";

import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import {
  changePostStatus,
  selectIsNewPost,
  selectPosts,
} from "../../../../redux/slices/post/postSlice";
import { NewPostCard } from "../../organism/postCard/NewPostCard";
import { useGetNewPostAndSubScribe } from "../../../../hooks/post/useGetNewPostAndSubScribe";
import { useGetWantedPostAndSubScribe } from "../../../../hooks/post/useGetWantedPostAndSubScribe";
import { Loading } from "../../atom/Loading/Loading";
import { NormalButton } from "../../atom/button/NormalButton";

export const NewPostList: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts);
  const isNewPost = useAppSelector(selectIsNewPost);
  const dispatch = useAppDispatch();

  //カスタムフック（新しいポストの取得、サブスクリプション、投稿の追加読み込み)
  const {
    isGetNewPostLoading,
    getAdditionalNewPost,
    isGetAdditionalNewPostLoading,
  } = useGetNewPostAndSubScribe();
  //注目度の高いポストの取得(like順)
  const {
    isGetWantedPostLoading,
    getAdditionalWantedPost,
    isGetAdditionalWantedPostLoading,
  } = useGetWantedPostAndSubScribe();

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
        <Loading />
      ) : (
        <>
          <VStack spacing="3" mt="4">
            {posts.map((post) => (
              <NewPostCard post={post} key={post?.id} isPosts={true} />
            ))}
          </VStack>
          {isGetAdditionalNewPostLoading || isGetAdditionalWantedPostLoading ? (
            <Loading />
          ) : (
            <VStack w="100%" mt="8" mb="10">
              <NormalButton
                hover={{ bg: "blue.500" }}
                text="Read More"
                bg="blue.300"
                color="white"
                onClick={
                  isNewPost ? getAdditionalNewPost : getAdditionalWantedPost
                }
                px="8"
                w={{ base: "80%", md: "60%" }}
              />
            </VStack>
          )}
        </>
      )}
    </Box>
  );
});
