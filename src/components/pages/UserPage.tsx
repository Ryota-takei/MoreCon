import React, { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";
import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";
import { searchByDisplayId } from "../../graphql/queries";
import { SearchByDisplayIdQuery } from "../../API";
import { GetUser } from "../../types/user/user";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { NormalButton } from "../atom/button/NormalButton";
import { useGetImage } from "../../hooks/function/useGetImage";

type SearchUser = {
  data: SearchByDisplayIdQuery;
};

export const UserPage: React.VFC = memo(() => {
  const { notAdminCheck } = UseAdminCheck();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<GetUser>();
  const userInformation = useAppSelector(selectUser);
  const { userId } = useParams<{ userId: string }>();
  const {imageUrl } = useGetImage(userInformation);
  const history = useHistory();

  console.log(userInformation);
  console.log(userId);

  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();
    const getUserInformation = async () => {
      try {
        const user = (await API.graphql(
          graphqlOperation(searchByDisplayId, { displayId: userId })
        )) as SearchUser;
        console.log(user);
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
  }, [userId]);


  console.log(user);
  console.log(userInformation);
  return (
    <>
      <Box w={{ base: "100", md: "50%" }} minH="100vh" mx="auto">
        <Stack textAlign="center" pt="8" spacing="5">
          <Image
            src={imageUrl}
            alt="プロフィール画像"
            borderRadius="full"
            boxSize="150px"
            mx="auto"
          />

          <Text fontWeight="bold" fontSize="lg">
            {user?.name}
          </Text>
          <Text pb="3">{user?.profile}</Text>
          <hr style={{ width: "80%", margin: "auto" }} />
          <Text>30ありがとう</Text>
          {user?.id === userInformation?.id && (
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
      </Box>
    </>
  );
});
