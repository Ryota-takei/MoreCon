import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Observable } from "zen-observable-ts";
import produce from "immer";

import { onCreateComment } from "../../graphql/subscriptions";
import {
  ListCommentsSortedByTimestampQuery,
  OnCreateCommentSubscription,
} from "../../API";
import { Comment } from "../../types/comment/CommentType";
import { listCommentsSortedByTimestamp } from "../../graphql/queries";
import { Post } from "../../types/post/NewPots";

type Comments = {
  data: ListCommentsSortedByTimestampQuery;
};

type Type = "INITIAL_QUERY" | "ADDITIONAL_QUERY";

export const useGetCommentAndSubscribe = (
  post: Post,
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>,
  setComments: React.Dispatch<React.SetStateAction<Comment[] | null>>
) => {

  const [isGetNewCommentLoading, setIsGetNewCommentLoading] = useState(false);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [isGetAdditionalCommentLoading, setIsGetAdditionalCommentLoading] =
    useState(false);

  const getComments = async (type: Type, nextToken: string | null = null) => {
    if (type === "INITIAL_QUERY") {
      setIsGetNewCommentLoading(true);
    } else {
      setIsGetAdditionalCommentLoading(true);
    }

    try {
      const commentsList = (await API.graphql(
        graphqlOperation(listCommentsSortedByTimestamp, {
          postId: post?.id,
          sortDirection: "DESC",
          limit: 8,
          nextToken: nextToken,
        })
      )) as Comments;
      const comments = commentsList.data.listCommentsSortedByTimestamp?.items;
      if (comments) {
        if (type === "INITIAL_QUERY") {
          setComments(comments);
        } else {
          setComments((preComments) => {
            const newComments = [...preComments!, ...comments];
            return newComments;
          });
        }
      }
      const newNextToken =
        commentsList.data.listCommentsSortedByTimestamp?.nextToken;
      if (newNextToken) {
        setNextToken(newNextToken);
      } else {
        setNextToken(null)
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsGetNewCommentLoading(false);
      setIsGetAdditionalCommentLoading(false);
    }
  };

  useEffect(() => {
    getComments("INITIAL_QUERY");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAdditionalComments = () => {
    if (nextToken === null) return;
    getComments("ADDITIONAL_QUERY", nextToken);
  };

  useEffect(() => {
    let unsubscribe;
    const subscription = API.graphql(graphqlOperation(onCreateComment));
    if (subscription instanceof Observable) {
      const sub = subscription.subscribe({
        next: (msg: { value: { data: OnCreateCommentSubscription } }) => {
          const comment = msg.value.data.onCreateComment as Comment;
          setComments((preComments) => {
            const newComments = produce(preComments, (addComment) => {
              addComment?.unshift(comment);
            });
            return newComments;
          });
          setCommentsCount((preVal) => preVal + 1);
        },
      });

      unsubscribe = () => {
        sub.unsubscribe();
      };
    }
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isGetNewCommentLoading,
    isGetAdditionalCommentLoading,
    getAdditionalComments,
  };
};
