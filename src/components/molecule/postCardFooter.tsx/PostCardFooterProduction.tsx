import { Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { API, graphqlOperation } from "aws-amplify";
import React, { memo, useRef, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { deletePosts } from "../../../features/post/newPostSlice";
import { updatePost } from "../../../graphql/mutations";
import { Post } from "../../../types/post/NewPots";
import { PostStatusButton } from "../../atom/postCardFooter/PostStatusButton";
import { Alert } from "../../organism/alert/Alert";

type Prop = {
  post: Post;
};

export const PostCardFooterProduction: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const onCloseAlert = () => setOpen(false);

  const onClickReturnNewPost = async () => {
    const input = {
      id: post?.id,
      type: "new",
    };
    try {
      await API.graphql(graphqlOperation(updatePost, { input }));
      if (post) {
        dispatch(deletePosts(post.id));
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };
  return (
    <>
      <Menu>
        <MenuButton my="auto" h="100%">
          <PostStatusButton text="制作中" />
        </MenuButton>

        <MenuList>
          <MenuItem onClick={() => setOpen(true)}>
            <Text color="black">未制作に戻す</Text>
          </MenuItem>
          <MenuItem>
            {" "}
            <Text color="black">完成！！</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Alert
        isOpen={open}
        onClose={onCloseAlert}
        cancelRef={cancelRef}
        dialogBody="本当に未制作に戻しますか？"
        buttonText="戻す"
        onClick={onClickReturnNewPost}
      />
    </>
  );
});
