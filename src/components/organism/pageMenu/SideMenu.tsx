import { useHistory } from "react-router";
import { FaRegLightbulb, FaDesktop } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsPeopleCircle } from "react-icons/bs";
import { Box, Stack } from "@chakra-ui/layout";

import { Menu } from "../../atom/sidebar/Menu";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changePageState, Pages, selectPage } from "../../../features/page/pageSlice";
import { selectUser } from "../../../features/user/userSlice";
import { fetchNextToken } from "../../../features/post/postSlice";

export const SideMenu = () => {
  const history = useHistory();
  const currentUser = useAppSelector(selectUser);
  const pageState = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  const clickChangeState = (arg:Pages) => {
    dispatch(changePageState(arg));
    dispatch(fetchNextToken(null))
  };
 
  const clickMyPage = () => {
    history.push(`/user/${currentUser?.displayId}`);
  };

  return (
    <Box w="25%" display={{ base: "none", md: "block" }} mt="100px">
      <Stack spacing="4">
        <Menu
          onClick={()=> clickChangeState("newPosts")}
          children={<FaRegLightbulb />}
          text="みんなの欲しい"
          page="newPosts"
          pageState={pageState}
        />
        <Menu
          onClick={()=> clickChangeState("inProduction")}
          children={<FaDesktop />}
          text="制作中！"
          page="inProduction"
          pageState={pageState}
        />
        <Menu
         onClick={()=> clickChangeState("finish")}
          children={<GiPartyPopper />}
          text="完成！"
          page="finish"
          pageState={pageState}
        />
        <Box>
          <Menu
            onClick={clickMyPage}
            children={<BsPeopleCircle />}
            text="マイページ"
            page="myPage"
            pageState={pageState}
          />
        </Box>
      </Stack>
    </Box>
  );
};
