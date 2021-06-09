import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { Box, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
} from "../../../API";
import { listPostsSortedByTimestamp } from "../../../graphql/queries";
import { PostCard } from "../../organism/post/PostCard";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  selectPosts,
} from "../../../features/post/newPostSlice";
import { useAppSelector } from "../../../app/hooks";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const InProductionList: React.VFC = () => {
  const dispatch = useDispatch();
  const posts = useAppSelector(selectPosts);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async (type: Type, nextToken: string | null = null) => {
    setIsLoading(true);

    try {
      const res = (await API.graphql(
        graphqlOperation(listPostsSortedByTimestamp, {
          type: "inProduction",
          sortDirection: "DESC",
          limit: 8,
          nextToken: nextToken,
        } as ListPostsQueryVariables)
      )) as GraphQLResult<ListPostsSortedByTimestampQuery>;

      if (res.data?.listPostsSortedByTimestamp?.items) {
        if (type === "INITIAL_QUERY") {
          dispatch(initialQuery(res.data.listPostsSortedByTimestamp.items));
        } else {
          dispatch(additionalQuery(res.data.listPostsSortedByTimestamp.items));
        }
      }

      if (res.data?.listPostsSortedByTimestamp?.nextToken) {
        dispatch(fetchNextToken(res.data.listPostsSortedByTimestamp.nextToken));
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPost("INITIAL_QUERY");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
