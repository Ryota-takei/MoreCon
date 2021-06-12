import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

import {
  ListPostsQueryVariables,
  ListPostsSortedByTimestampQuery,
  OnCreatePostSubscription,
  OnUpdatePostSubscription,
} from "../../API";
import { listPostsSortedByTimestamp } from "../../graphql/queries";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  additionalQuery,
  editNewPosts,
  fetchNextToken,
  initialQuery,
  selectIsNewPost,
  selectNextToken,
  subscriptionPosts,
} from "../../features/post/postSlice";
import { onCreatePost, onUpdatePost } from "../../graphql/subscriptions";

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetNewPostAndSubScribe = () => {
  const dispatch = useAppDispatch();
  const isNewPost = useAppSelector(selectIsNewPost);
  const [isGetNewPostLoading, setIsGetNewPostLoading] = useState(false);
  const [isGetAdditionalNewPostLoading, setIsGetAdditionalNewPostLoading] =
    useState(false);

  const nextToken = useAppSelector(selectNextToken);

  const getPosts = async (type: Type, nextToken: string | null = null) => {
    console.log(nextToken);
    if (type === "INITIAL_QUERY") {
      setIsGetNewPostLoading(true);
    } else {
      setIsGetAdditionalNewPostLoading(true);
    }

    try {
      const res = (await API.graphql(
        graphqlOperation(listPostsSortedByTimestamp, {
          type: "new",
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
        dispatch(fetchNextToken(null))
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
    setIsGetNewPostLoading(false);
    setIsGetAdditionalNewPostLoading(false);
  };

  const getAdditionalNewPost = () => {
    if (nextToken === null) return;
    getPosts("ADDITIONAL_QUERY", nextToken);
  };

  useEffect(() => {
    if (isNewPost) {
      let unsubscribe;
      getPosts("INITIAL_QUERY");
      const subscription = API.graphql(graphqlOperation(onCreatePost));
      if (subscription instanceof Observable) {
        const subNewPost = subscription.subscribe({
          next: (msg: { value: { data: OnCreatePostSubscription } }) => {
            const post = msg.value.data.onCreatePost;
            if (post) {
              dispatch(subscriptionPosts(post));
            }
          },
        });

        unsubscribe = () => {
          subNewPost.unsubscribe();
        };
      }
      return unsubscribe;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewPost]);

  useEffect(() => {
    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onUpdatePost));
    if (subscription instanceof Observable) {
      const subUpdatePost = subscription.subscribe({
        next: (msg: { value: { data: OnUpdatePostSubscription } }) => {
          const post = msg.value.data.onUpdatePost;
          if (post) {
            dispatch(editNewPosts(post));
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

  return {
    isGetNewPostLoading,
    getAdditionalNewPost,
    isGetAdditionalNewPostLoading,
  };
};
