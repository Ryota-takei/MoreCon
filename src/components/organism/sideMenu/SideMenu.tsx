import { Box,Stack } from "@chakra-ui/layout";
import { FaRegLightbulb, FaDesktop } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsPeopleCircle } from "react-icons/bs";

import { Menu } from "../../atom/sidebar/Menu";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changePageState } from "../../../features/page/pageSlice";
import { selectUser } from "../../../features/user/userSlice";

export const SideMenu = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);

  const clickNewPosts = () => {
    dispatch(changePageState("newPosts"));
  };
  const clickInProductionPosts = () => {
    dispatch(changePageState("inProduction"));
  };
  const clickFinishPosts = () => {
    dispatch(changePageState("finish"));
  };

  const clickMyPage = () => {
    history.push(`/user/${currentUser?.displayId}`);
  };

  return (
    <Box w="25%" display={{ base: "none", md: "block" }} mt="100px">
      <Stack spacing="4">
        <Menu
          onClick={clickNewPosts}
          children={<FaRegLightbulb />}
          text="みんなの欲しい"
          page="newPosts"
        />
        <Menu
          onClick={clickInProductionPosts}
          children={<FaDesktop />}
          text="制作中！"
          page="inProduction"
        />
        <Menu
          onClick={clickFinishPosts}
          children={<GiPartyPopper />}
          text="完成！"
          page="finish"
        />
        <Menu
          onClick={clickMyPage}
          children={<BsPeopleCircle />}
          text="マイページ"
          page="myPage"
        />
      </Stack>
    </Box>
  );
};
