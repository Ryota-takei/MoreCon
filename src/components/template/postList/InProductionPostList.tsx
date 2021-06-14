import { Box, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { NewPostCard } from "../../organism/postCard/NewPostCard";
import { selectPosts } from "../../../features/post/postSlice";
import { useAppSelector } from "../../../app/hooks";
import { useGetInProductionPostAndSubscribe } from "../../../hooks/post/useGetInProductionPostAndSubscribe";
import { Loading } from "../../atom/Loading/Loading";
import { NormalButton } from "../../atom/button/NormalButton";

export const InProductionPostList: React.VFC = () => {
  const posts = useAppSelector(selectPosts);

  //カスタムフック（制作中の投稿の取得とサブスクリプション)
  const {
    isGetInProductionPostLoading,
    isGetInProductionAddPostLoading,
    getAdditionalNewPost,
  } = useGetInProductionPostAndSubscribe();

  return (
    <Box minH="100Vh" w="100%" p="2">
      {isGetInProductionPostLoading ? (
        <Box w="100%" textAlign="center" pt="6">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <VStack spacing="3" mt="4">
            {posts.map((post) => (
              <NewPostCard post={post} key={post?.id} isPosts={true} />
            ))}
          </VStack>
            {isGetInProductionAddPostLoading ? (
              <Loading />
            ) : (
              <VStack w="100%"  mt="8" mb="10" >
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
};
