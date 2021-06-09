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
} from "../../features/post/newPostSlice";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetWantedPostAndSubScribe = () => {
  const [isGetWantedPostLoading, setIsGetWantedPostLoading] = useState(false);
  const isNewPost = useAppSelector(selectIsNewPost);
  const dispatch = useAppDispatch();

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    setIsGetWantedPostLoading(true);
    const res = (await API.graphql(
      graphqlOperation(listPostsSortedByLikeCount, {
        type: "new",
        sortDirection: "DESC",
        limit: 8,
        nextToken: nextToken,
      } as ListPostsQueryVariables)
    )) as GraphQLResult<ListPostsSortedByLikeCountQuery>;

    if (res.data?.listPostsSortedByLikeCount?.items) {
      if (type === "INITIAL_QUERY") {
        dispatch(initialQuery(res.data.listPostsSortedByLikeCount.items));
      } else {
        dispatch(additionalQuery(res.data.listPostsSortedByLikeCount.items));
      }
    }

    if (res.data?.listPostsSortedByLikeCount?.nextToken) {
      dispatch(fetchNextToken(res.data.listPostsSortedByLikeCount.nextToken));
    }
    setIsGetWantedPostLoading(false);
  };

  useEffect(() => {
    if (!isNewPost) {
      getPosts("INITIAL_QUERY");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewPost]);

  return { isGetWantedPostLoading };
};
