import { memo } from "react";
import { useHistory } from "react-router";
import { FaRegLightbulb, FaDesktop } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsPeopleCircle } from "react-icons/bs";
import { Box, Stack } from "@chakra-ui/layout";

import { Menu } from "../../atom/sidebar/Menu";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  changePageState,
  Pages,
  selectPage,
} from "../../../../redux/slices/page/pageSlice";
import { selectUser } from "../../../../redux/slices/user/userSlice";
import { fetchNextToken } from "../../../../redux/slices/post/postSlice";
import { NewPost } from "../../atom/sidebar/NewPost";

type Prop = {
  onOpen: () => void;
};

export const SideMenu: React.VFC<Prop> = memo((props) => {
  const { onOpen } = props;
  const history = useHistory();
  const currentUser = useAppSelector(selectUser);
  const pageState = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  const clickChangeState = (arg: Pages) => {
    dispatch(changePageState(arg));
    dispatch(fetchNextToken(null));
  };

  const clickMyPage = () => {
    history.push(`/user/${currentUser?.displayId}`);
  };

  return (
    <Box w="25%" display={{ base: "none", md: "block" }} mt="100px">
      <Stack spacing="4">
        <Menu
          onClick={() => clickChangeState("newPosts")}
          children={<FaRegLightbulb />}
          text="みんなの欲しい"
          page="newPosts"
          pageState={pageState}
        />
        <Menu
          onClick={() => clickChangeState("inProduction")}
          children={<FaDesktop />}
          text="制作中！"
          page="inProduction"
          pageState={pageState}
        />
        <Menu
          onClick={() => clickChangeState("finish")}
          children={<GiPartyPopper />}
          text="完成！"
          page="finish"
          pageState={pageState}
        />
        <Menu
          onClick={clickMyPage}
          children={<BsPeopleCircle />}
          text="マイページ"
          page="myPage"
          pageState={pageState}
        />
        <NewPost
          onClick={onOpen}
          text="新規投稿"
          bg="blue.300"
          color="white"
        />
      </Stack>
    </Box>
  );
});
