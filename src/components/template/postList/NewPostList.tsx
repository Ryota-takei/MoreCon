import React, { memo, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Box, Flex, VStack } from "@chakra-ui/layout";

import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnCreatePostSubscription,
} from "../../../API";
import { listPostsSortedByTimestamp } from "../../../graphql/queries";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  selectPosts,
  subscriptionPosts,
} from "../../../features/post/newPostSlice";
import { onCreatePost } from "../../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";
import { PostCard } from "../../organism/post/PostCard";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const NewPostList: React.VFC = memo(() => {
  const disPatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    const res = (await API.graphql(
      graphqlOperation(listPostsSortedByTimestamp, {
        type: "new",
        sortDirection: "DESC",
        limit: 8,
        nextToken: nextToken,
      } as ListPostsQueryVariables)
    )) as GraphQLResult<ListPostsSortedByTimestampQuery>;
    console.log(res);

    if (res.data?.listPostsSortedByTimestamp?.items) {
      if (type === "INITIAL_QUERY") {
        disPatch(initialQuery(res.data.listPostsSortedByTimestamp.items));
      } else {
        disPatch(additionalQuery(res.data.listPostsSortedByTimestamp.items));
      }
    }

    if (res.data?.listPostsSortedByTimestamp?.nextToken) {
      disPatch(fetchNextToken(res.data.listPostsSortedByTimestamp.nextToken));
    }
  };

  useEffect(() => {
    getPosts("INITIAL_QUERY");
    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onCreatePost));
    if (subscription instanceof Observable) {
      const sub = subscription.subscribe({
        next: (msg: { value: { data: OnCreatePostSubscription } }) => {
          const post = msg.value.data.onCreatePost;
          if (post) {
            disPatch(subscriptionPosts(post));
          }
        },
      });
      unsubscribe = () => {
        sub.unsubscribe();
      };
    }
    return unsubscribe;
  }, []);

  return (
    <Box minH="100Vh" w="100%" pt={{ base: "80px", md: "100px" }} p="2">
      <Flex
        borderRadius="10px"
        w="80%"
        border="1px"
        borderColor="blue.200"
        mx="auto"
      >
        <Box
          bg="blue.300"
          color="white"
          w="50%"
          textAlign="center"
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          新着順
        </Box>
        <Box
          color="blue.300"
          w="50%"
          textAlign="center"
          style={{
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          注目順
        </Box>
      </Flex>
      <VStack spacing="3" mt="4">
        {posts.map((post) => (
          <PostCard post={post} key={post?.id} />
        ))}
      </VStack>
    </Box>
  );
});
