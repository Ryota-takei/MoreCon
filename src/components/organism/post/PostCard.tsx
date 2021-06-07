import React, { memo, useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Box, Text } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";

import { UseGetImage } from "../../../hooks/function/UseGetImage";
import { Post } from "../../../types/post/NewPots";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../../features/user/userSlice";
import { deletePost } from "../../../graphql/mutations";
import { deletePosts } from "../../../features/post/newPostSlice";
import { Alert } from "../alert/Alert";
import { EditPostModal } from "../modal/EditPostModal";
import { PostCardFooter } from "./PostCardFooter";
import { CardHeader } from "../../molecule/card/CardHeader";
import { CommentCard } from "../comment/CommentCard";

type Prop = {
  post: Post;
};

export const PostCard: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const loginUser = useAppSelector(selectUser);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  const { getImage } = UseGetImage(post?.contributor, setImageUrl);
  const onCloseAlert = () => setOpen(false);

  const onClickDeletePost = async () => {
    try {
      if (post) {
        await API.graphql(
          graphqlOperation(deletePost, { input: { id: post.id } })
        );
        dispatch(deletePosts(post.id));
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };

  useEffect(() => {
    getImage();
    setCommentCount(post?.comments?.items?.length ?? 0)
  }, []);

  return (
    <>
      <Box
        w="100%"
        border="1px"
        borderColor="gray.100"
        borderRadius="10px"
        boxShadow="sm"
      >
        <CardHeader
          post={post}
          loginUser={loginUser}
          imageUrl={imageUrl}
          onOpen={onOpen}
          setOpen={setOpen}
          fontWeight="bold"
        />

        <Box m="4">
          <Text>{post?.content}</Text>
        </Box>
        <PostCardFooter post={post} setIsOpenComment={setIsOpenComment} commentCount={commentCount} />
      </Box>
      {isOpenComment && (
        <CommentCard
          post={post}
          imageUrl={imageUrl}
          setCommentCount={setCommentCount}
        />
      )}
      <EditPostModal isOpen={isOpen} onClose={onClose} post={post} />
      <Alert
        isOpen={open}
        onClose={onCloseAlert}
        cancelRef={cancelRef}
        onClickDeletePost={onClickDeletePost}
      />
    </>
  );
});
