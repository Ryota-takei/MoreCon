import { HStack } from "@chakra-ui/layout";
import React, { memo } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { changePageState } from "../../../features/page/pageSlice";
import { fetchNextToken } from "../../../features/post/postSlice";
import { Menu } from "../../atom/sidebar/Menu";

export const CenterMenu: React.VFC = memo(() => {
  const dispatch = useAppDispatch();

  const clickNewPosts = () => {
    dispatch(changePageState("newPosts"));
    dispatch(fetchNextToken(null));
  };
  const clickInProductionPosts = () => {
    dispatch(changePageState("inProduction"));
    dispatch(fetchNextToken(null));
  };
  const clickFinishPosts = () => {
    dispatch(changePageState("finish"));
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
      <Menu onClick={clickNewPosts} text="みんなの欲しい" page="newPosts" />
      <Menu
        onClick={clickInProductionPosts}
        text="制作中！"
        page="inProduction"
      />
      <Menu onClick={clickFinishPosts} text="完成！" page="finish" />
    </HStack>
  );
});
