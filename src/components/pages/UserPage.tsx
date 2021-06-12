import React, { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";
import { useAdminCheck } from "../../hooks/auth/useAdminCheck";
import { searchByDisplayId } from "../../graphql/queries";
import { SearchByDisplayIdQuery } from "../../API";
import { GetUser } from "../../types/user/user";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { NormalButton } from "../atom/button/NormalButton";
import { useGetImage } from "../../hooks/function/useGetImage";
import { ToTopPageButton } from "../atom/button/ToTopPageButton";
import { Avatar } from "@chakra-ui/avatar";

type SearchUser = {
  data: SearchByDisplayIdQuery;
};

export const UserPage: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<GetUser>();
  const loginUser = useAppSelector(selectUser);
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { imageUrl } = useGetImage(user);
  //カスタムフック（ログインしているかどうかを確認）
  const { notAdminCheck } = useAdminCheck();
  
  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();

    //URLからユーザーを特定して、userStateに情報を格納
    const getUserInformation = async () => {
      try {
        const user = (await API.graphql(
          graphqlOperation(searchByDisplayId, { displayId: userId })
        )) as SearchUser;
        if (!user.data.searchByDisplayId?.items![0]) {
          history.push("/page404");
        } else {
          if (user.data.searchByDisplayId) {
            setUser(user.data.searchByDisplayId!.items![0]);
          }
        }
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    };
    getUserInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <>
      <Box w={{ base: "100", md: "50%" }} minH="100vh" mx="auto">
        <Stack textAlign="center" pt="8" spacing="5">
          <Avatar
            src={imageUrl}
            boxSize="150px"
            mx="auto"
          />

          <Text fontWeight="bold" fontSize="lg">
            {user?.name}
          </Text>
          <Text pb="3">{user?.profile}</Text>
          <hr style={{ width: "80%", margin: "auto" }} />
          <Text>30ありがとう</Text>
          {user?.id === loginUser?.id && (
            <Box mx="auto">
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="プロフィールを編集する"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                w={{ base: "300px", md: "40%" }}
                onClick={() => history.push("/user")}
              />
            </Box>
          )}
        </Stack>
        <ToTopPageButton bottom={{base: "5%", sm:"30%"}} right={{ base: "5%", sm: "25%" }} />
      </Box>
    </>
  );
});
