import { memo, useRef, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Text } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/hooks";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

import { PostStatusButton } from "../../atom/button/PostStatusButton";
import { FinishPostModal } from "../../organism/modal/FinishPostModal";
import { deletePosts } from "../../../../redux/slices/post/postSlice";
import { updatePost } from "../../../../graphql/mutations";
import { useAppDispatch } from "../../../../redux/hooks";
import { Post } from "../../../../types/post/NewPots";
import { Alert } from "../../organism/alert/Alert";
import { changePageState } from "../../../../redux/slices/page/pageSlice";

type Prop = {
  post: Post;
};

export const PostCardFooterProduction: React.VFC<Prop> = memo((props) => {
  const { post } = props;

  const [isOpenReturnAlert, setIsOpenReturnAlert] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();

  const onCloseReturnAlert = () => setIsOpenReturnAlert(false);

  const onClickReturnNewPost = async () => {
    const input = {
      id: post?.id,
      type: "new",
      correspondingUserId: null,
    };
    try {
      await API.graphql(graphqlOperation(updatePost, { input }));
      if (post) {
        dispatch(deletePosts(post.id));
      }
      dispatch(changePageState("newPosts"));
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
          <MenuItem onClick={() => setIsOpenReturnAlert(true)}>
            <Text color="black">未制作に戻す</Text>
          </MenuItem>
          <MenuItem onClick={onOpen}>
            <Text color="black">完成！！</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <Alert
        isOpen={isOpenReturnAlert}
        onClose={onCloseReturnAlert}
        cancelRef={cancelRef}
        dialogBody="本当に未制作に戻しますか？"
        buttonText="戻す"
        onClick={onClickReturnNewPost}
      />
      <FinishPostModal isOpen={isOpen} onClose={onClose} post={post} />
    </>
  );
});
