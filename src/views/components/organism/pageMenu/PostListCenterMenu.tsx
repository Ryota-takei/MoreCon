import { memo } from "react";
import { HStack } from "@chakra-ui/layout";

import { useAppDispatch, useAppSelector } from "../../../../redux/app/hooks";
import { fetchNextToken } from "../../../../redux/slices/post/postSlice";
import { Menu } from "../../atom/sidebar/Menu";
import {
  changePageState,
  Pages,
  selectPage,
} from "../../../../redux/slices/page/pageSlice";

export const PostListCenterMenu: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectPage);

  const onChangeState = (arg: Pages) => {
    dispatch(changePageState(arg));
    dispatch(fetchNextToken(null));
  };

  return (
    <HStack
      display={{ base: "flex", md: "none" }}
      justifyContent="center"
      mt="2"
      spacing="3"
      textAlign="center"
    >
      <Menu
        onClick={() => onChangeState("newPosts")}
        text="みんなの欲しい"
        page="newPosts"
        pageState={pageState}
      />
      <Menu
        onClick={() => onChangeState("inProduction")}
        text="制作中！"
        page="inProduction"
        pageState={pageState}
      />
      <Menu
        onClick={() => onChangeState("finish")}
        text="完成！"
        page="finish"
        pageState={pageState}
      />
    </HStack>
  );
});
