import { API, graphqlOperation } from "aws-amplify";
import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ListPostsQueryVariables, ListPostsSortedByTimestampQuery, OnUpdatePostSubscription } from "../../API";
import { useAppSelector } from "../../app/hooks";
import { additionalQuery, editInProductionPost, fetchNextToken, initialQuery, selectPosts } from "../../features/post/postSlice";
import { listPostsSortedByTimestamp } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { onUpdatePost } from "../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetInProductionPostAndSubscribe = () => {
  const dispatch = useDispatch();
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

    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onUpdatePost));
    if (subscription instanceof Observable) {
      const subUpdatePost = subscription.subscribe({
        next: (msg: { value: { data: OnUpdatePostSubscription } }) => {
          const post = msg.value.data.onUpdatePost;
          if (post) {
            dispatch(editInProductionPost(post));
            console.log(post);
          }
        },
      });
      unsubscribe = () => {
        subUpdatePost.unsubscribe();
      };
    }
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {isLoading}
}
