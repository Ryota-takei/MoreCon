import { memo } from "react";
import { HStack } from "@chakra-ui/layout";

import { Menu } from "../../atom/sidebar/Menu";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  changePageLog,
  Log,
  selectPageLog,
} from "../../../../redux/slices/page/pageSlice";

export const UserPageMenu: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const logStatus = useAppSelector(selectPageLog);

  const onChangeState = (arg: Log) => {
    dispatch(changePageLog(arg));
  };

  return (
    <HStack justifyContent="center" mt="2" spacing="3" textAlign="center">
      <Menu
        text="投稿履歴"
        pageState={logStatus}
        page="post"
        onClick={() => onChangeState("post")}
      />
      <Menu
        text="制作履歴"
        pageState={logStatus}
        page="production"
        onClick={() => onChangeState("production")}
      />
      <Menu
        text="Want履歴"
        pageState={logStatus}
        page="want"
        onClick={() => onChangeState("want")}
      />
    </HStack>
  );
});
