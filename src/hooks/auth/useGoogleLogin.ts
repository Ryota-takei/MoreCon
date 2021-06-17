import { Auth, API, graphqlOperation } from "aws-amplify";
import { useToast } from "@chakra-ui/toast";

import { getUserInformation } from "../../redux/slices/user/userSlice";
import { getUniqueStr } from "../../views/utils/getUniqueStr";
import { createUser } from "../../graphql/mutations";
import { GetUserGraph, NewUser } from "./useSignIn";
import { useAppDispatch } from "../../redux/hooks";
import { getUser } from "../../graphql/queries";

export const useGoogleLogin = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const isGoogleLogin = async () => {
    try {
      const user = await Auth.currentUserInfo().then((user) => {
        return user;
      });
      const currentUser = (await API.graphql(
        graphqlOperation(getUser, { id: user.username })
      )) as GetUserGraph;

      //Googleでログイン時にdbにアカウントがなければ新規でアカウント作成
      if (!currentUser.data.getUser) {
        const input = {
          id: user.username,
          name: "No Name",
          profile: "こんにちは！",
          displayId: getUniqueStr(),
        };
        const res = (await API.graphql(
          graphqlOperation(createUser, { input })
        )) as NewUser;
        dispatch(getUserInformation(res.data.createUser));
        toast({
          title: "右上のアイコンボタンからプロフィールの設定をお願いします",
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };
  return { isGoogleLogin };
};
