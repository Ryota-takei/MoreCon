import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnCreatePostSubscription,
} from "../../API";
import { listPostsSortedByTimestamp } from "../../graphql/queries";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  selectIsNewPost,
  subscriptionPosts,
} from "../../features/post/newPostSlice";
import { onCreatePost } from "../../graphql/subscriptions";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetNewPostAndSubScribe = () => {
  const dispatch = useAppDispatch();
  const isNewPost = useAppSelector(selectIsNewPost)
  const [isGetNewPostLoading, setIsGetNewPostLoading] = useState(false);

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    setIsGetNewPostLoading(true);
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
        dispatch(initialQuery(res.data.listPostsSortedByTimestamp.items));
      } else {
        dispatch(additionalQuery(res.data.listPostsSortedByTimestamp.items));
      }
    }

    if (res.data?.listPostsSortedByTimestamp?.nextToken) {
      dispatch(fetchNextToken(res.data.listPostsSortedByTimestamp.nextToken));
    }
    setIsGetNewPostLoading(false);
  };

  useEffect(() => {
    if (isNewPost) {
      let unsubscribe;
      getPosts("INITIAL_QUERY");
      const subscription = API.graphql(graphqlOperation(onCreatePost));
      if (subscription instanceof Observable) {
        const sub = subscription.subscribe({
          next: (msg: { value: { data: OnCreatePostSubscription } }) => {
            const post = msg.value.data.onCreatePost;
            if (post) {
              dispatch(subscriptionPosts(post));
            }
          },
        });
        unsubscribe = () => {
          sub.unsubscribe();
        };
      }
      return unsubscribe;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [isNewPost]);

  return { isGetNewPostLoading };
};
