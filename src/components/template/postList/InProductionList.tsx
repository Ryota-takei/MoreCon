import { Box, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { PostCard } from "../../organism/post/PostCard";
import { selectPosts } from "../../../features/post/postSlice";
import { useAppSelector } from "../../../app/hooks";
import { useGetInProductionPostAndSubscribe } from "../../../hooks/post/useGetInProductionPostAndSubscribe";

export const InProductionList: React.VFC = () => {
  const posts = useAppSelector(selectPosts);

  //カスタムフック（制作中の投稿の取得とサブスクリプション)
  const { isLoading } = useGetInProductionPostAndSubscribe();

  return (
    <Box minH="100Vh" w="100%" p="2">
      {isLoading ? (
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
};
