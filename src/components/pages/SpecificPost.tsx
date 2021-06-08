import React, { memo, useEffect, useState } from "react";
import {
  RouteComponentProps,
  Router,
  useHistory,
  useLocation,
  useParams,
} from "react-router";
import { Location } from "history";
import { Post } from "../../types/post/NewPots";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";

import { PostCard } from "../organism/post/PostCard";
import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";
import { API, graphqlOperation } from "aws-amplify";
import { getPost } from "../../graphql/queries";
import { GetPostQuery } from "../../API";
import { Spinner } from "@chakra-ui/spinner";
import { Box } from "@chakra-ui/layout";

type GetPost = {
  data: {
    getPost: Post;
  };
};

export const SpecificPost: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const { notAdminCheck } = UseAdminCheck();
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post>(null);
  const [isLoading, setIsLoading] = useState(false);
  const userInformation = useAppSelector(selectUser);
  const history = useHistory();

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
