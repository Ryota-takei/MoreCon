import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnUpdatePostSubscription,
} from "../../API";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  additionalQuery,
  fetchNextToken,
  initialQuery,
  editFinishPost,
  selectNextToken,
} from "../../redux/slices/post/postSlice";
import { listPostsSortedByTimestamp } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { onUpdatePost } from "../../graphql/subscriptions";
import { Observable } from "zen-observable-ts";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetFinishPostAndSubScribe = () => {
  const dispatch = useAppDispatch();
  const [isGetFinishPostLoading, setIsGetFinishPostLoading] = useState(false);
  const [isGetFinishPostAddLoading, setIsGetFinishPostAddLoading] =
    useState(false);
  const nextToken = useAppSelector(selectNextToken);

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    if (type === "INITIAL_QUERY") {
      setIsGetFinishPostLoading(true);
    } else {
      setIsGetFinishPostAddLoading(true);
    }

    try {
      const res = (await API.graphql(
        graphqlOperation(listPostsSortedByTimestamp, {
          type: "finish",
          sortDirection: "DESC",
          limit: 8,
          nextToken: nextToken,
        } as ListPostsQueryVariables)
      )) as GraphQLResult<ListPostsSortedByTimestampQuery>;

      const post = res.data?.listPostsSortedByTimestamp?.items;
      if (post) {
        if (type === "INITIAL_QUERY") {
          dispatch(initialQuery(post));
        } else {
          dispatch(additionalQuery(post));
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
    setIsGetFinishPostLoading(false);
    setIsGetFinishPostAddLoading(false);
  };

  const getAdditionalNewPost = () => {
    if (nextToken === null) return;
    getPosts("ADDITIONAL_QUERY", nextToken);
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
    isGetFinishPostLoading,
    isGetFinishPostAddLoading,
    getAdditionalNewPost,
  };
};
