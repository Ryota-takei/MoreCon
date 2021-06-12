import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import {
  ListPostsQueryVariables,
  ListPostsSortedByLikeCountQuery,
} from "../../API";
import { listPostsSortedByLikeCount } from "../../graphql/queries";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  selectIsNewPost,
  selectNextToken,
} from "../../features/post/postSlice";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetWantedPostAndSubScribe = () => {
  const [isGetWantedPostLoading, setIsGetWantedPostLoading] = useState(false);
  const [
    isGetAdditionalWantedPostLoading,
    setIsGetAdditionalWantedPostLoading,
  ] = useState(false);
  const isNewPost = useAppSelector(selectIsNewPost);
  const nextToken = useAppSelector(selectNextToken);
  const dispatch = useAppDispatch();

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    if (type === "INITIAL_QUERY") {
      setIsGetWantedPostLoading(true);
    } else {
      setIsGetAdditionalWantedPostLoading(true);
    }
    try {
      const res = (await API.graphql(
        graphqlOperation(listPostsSortedByLikeCount, {
          type: "new",
          sortDirection: "DESC",
          limit: 8,
          nextToken: nextToken,
        } as ListPostsQueryVariables)
      )) as GraphQLResult<ListPostsSortedByLikeCountQuery>;

      const posts = res.data?.listPostsSortedByLikeCount?.items;
      if (posts) {
        if (type === "INITIAL_QUERY") {
          dispatch(initialQuery(posts));
        } else {
          dispatch(additionalQuery(posts));
        }
      }

      const newNextToken = res.data?.listPostsSortedByLikeCount?.nextToken;
      if (newNextToken) {
        dispatch(fetchNextToken(newNextToken));
      } else {
        dispatch(fetchNextToken(null));
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
    setIsGetWantedPostLoading(false);
    setIsGetAdditionalWantedPostLoading(false);
  };

  const getAdditionalWantedPost = () => {
    if (nextToken === null) return;
    getPosts("ADDITIONAL_QUERY", nextToken);
  };

  useEffect(() => {
    if (!isNewPost) {
      getPosts("INITIAL_QUERY");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewPost]);

  return {
    isGetWantedPostLoading,
    getAdditionalWantedPost,
    isGetAdditionalWantedPostLoading,
  };
};
