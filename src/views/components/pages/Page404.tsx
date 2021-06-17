import { memo, useEffect } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../../redux/slices/user/userSlice";
import { useAdminCheck } from "../../../hooks/auth/useAdminCheck";
import { NormalButton } from "../atom/button/NormalButton";

export const Page404: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const { isAdminCheck } = useAdminCheck();
  const currentUser = useAppSelector(selectUser);
  const history = useHistory();

  const onClickTopPage = () => {
    history.push(currentUser ? "/posts" : "/");
  };

  useEffect(() => {
    //user情報をReduxに格納
    dispatch(getCurrentUserInformation());
    isAdminCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="auto" textAlign="center" alignItems="center">
      <Box mt="250px">
        <Text fontWeight="bold">404</Text>
        <Text mb="10">お探しのページが見つかりませんでした。</Text>
        <NormalButton
          hover={{ bg: "blue.300", color: "white" }}
          text="Topページへ"
          borderColor="blue.200"
          bg="white"
          color="blue.200"
          onClick={onClickTopPage}
        />
      </Box>
    </Box>
  );
});
