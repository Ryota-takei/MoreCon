import React, { memo, useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";

import { UseGetCreateDate } from "../../../hooks/function/UseGetDate";
import { UseGetImage } from "../../../hooks/function/UseGetImage";
import { Post } from "../../../types/post/NewPots";
import NoImage from "../../../Image/NoImage.png";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/user/userSlice";
import { deletePost } from "../../../graphql/mutations";
import { deletePosts } from "../../../features/post/newPostSlice";
import { MenuBar } from "../menu/MenuBar";
import { Alert } from "../alert/Alert";

type Prop = {
  post: Post;
};

export const PostCard: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const loginUser = useAppSelector(selectUser);

  const { date } = UseGetCreateDate(post?.timestamp);
  const { getImage } = UseGetImage(post?.contributor, setImageUrl);
  const onClose = () => setIsOpen(false);

  const onClickDeletePost = async () => {
    try {
      if (post) {
        API.graphql(graphqlOperation(deletePost, { input: { id: post.id } }));
        dispatch(deletePosts(post.id));
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <Box
        w="100%"
        border="1px"
        borderColor="gray.100"
        borderRadius="10px"
        p="3"
        boxShadow="sm"
      >
        <HStack>
          <Image
            src={post?.contributor?.image ? imageUrl : NoImage}
            alt="プロフィール画像"
            borderRadius="full"
            boxSize="70px"
            border="1px"
            borderColor="gray.100"
          />
          <Stack w="100%">
            <Flex>
              <Flex mr="auto">
                <Heading size="sm">{post?.contributor?.name}</Heading>
                <Text color="gray.400">さん</Text>
              </Flex>
              <Flex>
                <Text color="gray.400">{date}</Text>
                {loginUser?.id === post?.contributor?.id ? (
                  <MenuBar setIsOpen={setIsOpen} />
                ) : null}
              </Flex>
            </Flex>
            <Box>
              <Text fontWeight="bold"> {post?.title}</Text>
            </Box>
          </Stack>
        </HStack>
        <Box m="2">
          <Text>{post?.content}</Text>
        </Box>
      </Box>
      <Alert
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        onClickDeletePost={onClickDeletePost}
      />
    </>
  );
});
