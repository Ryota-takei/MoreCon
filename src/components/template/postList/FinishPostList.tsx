import  { memo } from "react";
import { Box, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import { useAppSelector } from "../../../app/hooks";
import { selectPosts } from "../../../features/post/postSlice";
import { useGetFinishPostAndSubScribe } from "../../../hooks/post/useGetFinishPostAndSubScribe";
import { FinishPostCard } from "../../organism/post/FinishPostCard";

export const FinishPostList: React.VFC = memo(() => {
  const posts = useAppSelector(selectPosts);
 //カスタムフック（完成した作品の取得、サブスクリプション）
  const { isGetFinishPostLoading } = useGetFinishPostAndSubScribe();
  
  return (
    <Box minH="100Vh" w="100%" p="2">
      {isGetFinishPostLoading ? (
        <Box w="100%" textAlign="center" pt="6">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <VStack spacing="3" mt="4">
            {posts.map((post) => (
              <FinishPostCard post={post} key={post?.id} />
            ))}
          </VStack>
        </>
      )}
    </Box>
  );
});
