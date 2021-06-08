import React, { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Post } from "../../types/post/NewPots";
import { useAppDispatch } from "../../app/hooks";
import { getCurrentUserInformation } from "../../features/user/userSlice";

import { PostCard } from "../organism/post/PostCard";
import { useAdminCheck } from "../../hooks/auth/useAdminCheck";
import { API, graphqlOperation } from "aws-amplify";
import { getPost } from "../../graphql/queries";
import { Spinner } from "@chakra-ui/spinner";
import { Box } from "@chakra-ui/layout";

type GetPost = {
  data: {
    getPost: Post;
  };
};

export const SpecificPost: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post>(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  //カスタムフック
  const { notAdminCheck } = useAdminCheck();

  const getPostInformation = async () => {
    setIsLoading(true);
    try {
      const res = (await API.graphql(
        graphqlOperation(getPost, { id: postId })
      )) as GetPost;
      if (res.data.getPost) {
        setPost(res.data.getPost);
      } else {
        setIsLoading(false);
        history.push("/page404");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();
    getPostInformation();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Box w={{ base: "100", md: "50%" }} minH="100vh" mx="auto" mt="5">
      {isLoading ? (
        <Box w="100%" textAlign="center">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <PostCard post={post} isPosts={false} />
      )}
    </Box>
  );
});
