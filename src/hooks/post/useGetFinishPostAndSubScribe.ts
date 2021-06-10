import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnUpdatePostSubscription,
} from "../../API";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  selectIsNewPost,
  editFinishPost,
} from "../../features/post/postSlice";
import { getPost, listPostsSortedByTimestamp } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { onUpdatePost } from "../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetFinishPostAndSubScribe = () => {
  const dispatch = useAppDispatch();
  const [isGetFinishPostLoading, setIsGetFinishPostLoading] = useState(false);

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    setIsGetFinishPostLoading(true);
    const res = (await API.graphql(
      graphqlOperation(listPostsSortedByTimestamp, {
        type: "finish",
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
    setIsGetFinishPostLoading(false);
  };

  useEffect(() => {
    getPosts("INITIAL_QUERY");
    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onUpdatePost));
    if (subscription instanceof Observable) {
      const subUpdatePost = subscription.subscribe({
        next: (msg: { value: { data: OnUpdatePostSubscription } }) => {
          const post = msg.value.data.onUpdatePost;
          if (post) {
            dispatch(editFinishPost(post));
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

  return {isGetFinishPostLoading}
};
