import React, { memo, useEffect, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Box, Text } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";

import { Post } from "../../../../types/post/NewPots";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { selectUser } from "../../../../redux/slices/user/userSlice";
import { deletePost } from "../../../../graphql/mutations";
import { deletePosts } from "../../../../redux/slices/post/postSlice";
import { Alert } from "../alert/Alert";
import { EditPostModal } from "../modal/EditPostModal";
import { NewPostCardFooter } from "../../molecule/postCardFooter/NewPostCardFooter";
import { CardHeader } from "../../molecule/card/CardHeader";
import { CommentCard } from "../comment/CommentCard";
import { useHistory } from "react-router";
import { useGetImage } from "../../../../hooks/function/useGetImage";

type Prop = {
  post: Post;
  isPosts: boolean;
};

export const NewPostCard: React.VFC<Prop> = memo((props) => {
  const { post, isPosts } = props;

  const history = useHistory();
  const loginUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [open, setOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onCloseAlert = () => setOpen(false);
  //カスタムフック(postに紐づいているユーザー情報からimageUrlを取得)
  const { imageUrl } = useGetImage(post?.contributor);

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

  const onClickPost = () => {
    history.push(`posts/${post?.id}`);
  };

  useEffect(() => {
    setCommentsCount(post?.comments?.items?.length ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        <Box
          onClick={() => isPosts && onClickPost()}
          _hover={{ cursor: "pointer" }}
        >
          <Box p="4">
            <Text>{post?.content}</Text>
          </Box>
        </Box>
        <NewPostCardFooter
          post={post}
          setIsOpenComment={setIsOpenComment}
          commentCount={commentsCount}
        />
      </Box>
      {isOpenComment && (
        <CommentCard post={post} setCommentsCount={setCommentsCount} />
      )}
      <EditPostModal isOpen={isOpen} onClose={onClose} post={post} />
      <Alert
        isOpen={open}
        onClose={onCloseAlert}
        cancelRef={cancelRef}
        dialogBody="本当に削除しますか？"
        buttonText="削除"
        onClick={onClickDeletePost}
      />
    </>
  );
});
