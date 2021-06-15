import { memo } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { useAppSelector } from "../../../../redux/app/hooks";
import { selectPosts } from "../../../../redux/slices/post/postSlice";
import { useGetFinishPostAndSubScribe } from "../../../../hooks/post/useGetFinishPostAndSubScribe";
import { FinishPostCard } from "../../organism/postCard/FinishPostCard";
import { Loading } from "../../atom/Loading/Loading";
import { NormalButton } from "../../atom/button/NormalButton";

export const FinishPostList: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts);
  //カスタムフック（完成した作品の取得、サブスクリプション）
  const {
    isGetFinishPostLoading,
    isGetFinishPostAddLoading,
    getAdditionalNewPost,
  } = useGetFinishPostAndSubScribe();

  return (
    <Box minH="100Vh" w="100%" p="2">
      {isGetFinishPostLoading ? (
        <Box w="100%" textAlign="center" pt="6">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <VStack spacing="3">
            {posts.map((post) => (
              <FinishPostCard post={post} key={post?.id} />
            ))}
          </VStack>
          {isGetFinishPostAddLoading ? (
            <Loading />
          ) : (
            <VStack w="100%" mt="8" mb="10">
              <NormalButton
                hover={{ bg: "blue.500" }}
                text="Read More"
                bg="blue.300"
                color="white"
                onClick={getAdditionalNewPost}
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
