import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnUpdatePostSubscription,
} from "../../API";
import {
  additionalQuery,
  editInProductionPost,
  fetchNextToken,
  initialQuery,
  selectNextToken,
} from "../../redux/slices/post/postSlice";
import { listPostsSortedByTimestamp } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { onUpdatePost } from "../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";
import { useAppSelector } from "../../redux/app/hooks";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetInProductionPostAndSubscribe = () => {
  const dispatch = useDispatch();
  const [isGetInProductionPostLoading, setIsGetInProductionPostLoading] =
    useState(false);
  const [isGetInProductionAddPostLoading, setIsGetInProductionAddPostLoading] =
    useState(false);
  const nextToken = useAppSelector(selectNextToken);

  const getPost = async (type: Type, nextToken: string | null = null) => {
    if (type === "INITIAL_QUERY") {
      setIsGetInProductionPostLoading(true);
    } else {
      setIsGetInProductionAddPostLoading(true);
    }
    try {
      const res = (await API.graphql(
        graphqlOperation(listPostsSortedByTimestamp, {
          type: "inProduction",
          sortDirection: "DESC",
          limit: 8,
          nextToken: nextToken,
        } as ListPostsQueryVariables)
      )) as GraphQLResult<ListPostsSortedByTimestampQuery>;

      const posts = res.data?.listPostsSortedByTimestamp?.items;
      if (posts) {
        if (type === "INITIAL_QUERY") {
          dispatch(initialQuery(posts));
        } else {
          dispatch(additionalQuery(posts));
        }
      }

      const newNextToken = res.data?.listPostsSortedByTimestamp?.nextToken;
      if (newNextToken) {
        dispatch(fetchNextToken(newNextToken));
      } else {
        dispatch(fetchNextToken(null));
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }

    setIsGetInProductionPostLoading(false);
    setIsGetInProductionAddPostLoading(false);
  };

  const getAdditionalNewPost = () => {
    if (nextToken === null) return;
    getPost("ADDITIONAL_QUERY", nextToken);
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

  return {
    isGetInProductionPostLoading,
    getAdditionalNewPost,
    isGetInProductionAddPostLoading,
  };
};
