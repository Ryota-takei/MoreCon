import { useState } from "react";
import { useHistory } from "react-router";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { useToast } from "@chakra-ui/toast";

import { getUserInformation } from "../../features/user/userSlice";
import { User } from "../../types/user/user";
import { getUser } from "../../graphql/queries";
import { CreateUserMutation, GetUserQuery } from "../../API";
import { createUser } from "../../graphql/mutations";
import { useAppDispatch } from "../../app/hooks";
import { getUniqueStr } from "../../function/getUniqueStr";

export type DataValue = {
  email: string;
  password: string;
};

export type GetUserGraph = {
  data: GetUserQuery;
};

export type NewUser = {
  data: CreateUserMutation;
};

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const toast = useToast();
  const dispatch = useAppDispatch();

  const handleClickLogin = async (data: DataValue) => {
    setIsLoading(true);

    try {
      const userData = (await Auth.signIn(data.email, data.password)) as User;
      const result = (await API.graphql(
        graphqlOperation(getUser, { id: userData.username })
      )) as GetUserGraph;

      const input = {
        id: userData.username,
        name: userData.attributes.nickname,
        profile: "こんにちは！",
        displayId: getUniqueStr(),
      };

      if (result.data.getUser) {
        dispatch(getUserInformation(result.data.getUser));
      } else {
        const user = (await API.graphql(
          graphqlOperation(createUser, { input })
        )) as NewUser;
        dispatch(getUserInformation(user.data.createUser));
      }
      setIsLoading(false);
      history.push("/posts");
    } catch (error) {
      if (
        error.code === "UserNotFoundException" ||
        error.code === "NotAuthorizedException"
      ) {
        toast({
          title: "アドレスもしくはパスワードが違います",
          status: "error",
          isClosable: true,
        });
      } else {
        console.log(error);
        alert("エラーが発生しました");
      }
      setIsLoading(false);
    }
  };
  return { handleClickLogin, isLoading };
};
