import { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import { Box } from "@chakra-ui/layout";

import { Post } from "../../../types/post/NewPots";
import { useAppDispatch } from "../../../redux/hooks";
import { getCurrentUserInformation } from "../../../redux/slices/user/userSlice";
import { NewPostCard } from "../organism/postCard/NewPostCard";
import { useAdminCheck } from "../../../hooks/auth/useAdminCheck";
import { API, graphqlOperation } from "aws-amplify";
import { getPost } from "../../../graphql/queries";
import { ToTopPageButton } from "../atom/button/ToTopPageButton";

type GetPost = {
  data: {
    getPost: Post;
  };
};

export const SpecificPost: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [post, setPost] = useState<Post>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();
  //カスタムフック（ログインユーザーでない際にはtopページに遷移する。）
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
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  const onClickReturn = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();
    getPostInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Box
      w={{ base: "100", md: "50%" }}
      minH="100vh"
      mx="auto"
      mt="5"
      maxW="1250px"
    >
      {isLoading ? (
        <Box w="100%" textAlign="center">
          <Spinner thickness="4px" speed="0.65s" size="xl" color="gray.500" />
        </Box>
      ) : (
        <>
          <NewPostCard post={post} isPosts={false} />
          <ToTopPageButton
            bottom="25%"
            right={{ base: "5%", md: "25%" }}
            onClick={onClickReturn}
          />
        </>
      )}
    </Box>
  );
});
