import { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { Avatar } from "@chakra-ui/avatar";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/layout";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../../redux/slices/user/userSlice";
import { useAdminCheck } from "../../../hooks/auth/useAdminCheck";
import {
  listFollowRelationshipByFollowerId,
  listFollowRelationshipByFollowId,
  searchByDisplayId,
} from "../../../graphql/queries";
import {
  ListFollowRelationshipByFollowerIdQuery,
  ListFollowRelationshipByFollowIdQuery,
  SearchByDisplayIdQuery,
} from "../../../API";
import { GetUser } from "../../../types/user/user";
import { NormalButton } from "../atom/button/NormalButton";
import { useGetImage } from "../../../hooks/function/useGetImage";
import { ToTopPageButton } from "../atom/button/ToTopPageButton";
import { UserPageMenu } from "../organism/pageMenu/UserPageMenu";
import { UserPagePostList } from "../template/postList/UserPagePostList";
import { createFollowRelationship } from "../../../graphql/mutations";

type SearchUser = {
  data: SearchByDisplayIdQuery;
};

type FollowerInformation = {
  data: ListFollowRelationshipByFollowerIdQuery;
};

type FollowInformation = {
  data: ListFollowRelationshipByFollowIdQuery;
};

type FollowRelationshipInfo = {
  followId: string;
  followerId: string;
  id: string;
} | null;

export const UserPage: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<GetUser>();
  const [followerRelationshipInfo, setFollowerRelationshipInfo] = useState<
    FollowRelationshipInfo[] | undefined | null
  >();
  const [followRelationshipInfo, setFollowRelationshipInfo] = useState<
    FollowRelationshipInfo[] | undefined | null
  >();
  const loginUser = useAppSelector(selectUser);
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { imageUrl } = useGetImage(user);
  const thankCount = user?.thankCounts?.items?.length;
  //カスタムフック（ログインしているかどうかを確認）
  const { notAdminCheck } = useAdminCheck();

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

  const createNewFollowRelationship = async () => {
    const input = {
      followId: loginUser?.id,
      followerId: user?.id,
    };
    try {
      await API.graphql(graphqlOperation(createFollowRelationship, { input }));
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };

  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();
    getUserInformation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    if (user) {
      const getFollowInformation = async () => {
        const res = (await API.graphql(
          graphqlOperation(listFollowRelationshipByFollowerId, {
            followerId: user?.id,
          })
        )) as FollowerInformation;
        console.log(res);
        setFollowerRelationshipInfo(
          res.data.listFollowRelationshipByFollowerId?.items
        );
      };

      const getFollowerInformation = async () => {
        const res = (await API.graphql(
          graphqlOperation(listFollowRelationshipByFollowId, {
            followId: user?.id,
          })
        )) as FollowInformation;
        setFollowRelationshipInfo(
          res.data.listFollowRelationshipByFollowId?.items
        );
      };

      getFollowerInformation();
      getFollowInformation();
    }
  }, [user]);

  return (
    <>
      <Box w={{ base: "100", md: "50%" }} minH="100vh" mx="auto" mb="10">
        <Stack textAlign="center" pt="8" spacing="5">
          <Avatar src={imageUrl} boxSize="150px" mx="auto" />

          <Text fontWeight="bold" fontSize="lg">
            {user?.name}
          </Text>
          <Text pb="3">{user?.profile}</Text>
          <hr style={{ width: "80%", margin: "auto" }} />
          <VStack>
            <HStack spacing="1">
              <Text fontWeight="bold" fontSize="lg">
                {thankCount}
              </Text>
              <Text fontSize="sm" color="gray.500">
                ありがとう
              </Text>
            </HStack>
          </VStack>
          <Box mx="auto">
            {user?.id === loginUser?.id ? (
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="プロフィールを編集する"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                w={{ base: "300px", md: "40%" }}
                onClick={() => history.push("/user")}
              />
            ) : (
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="フォローする"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                w={{ base: "300px", md: "40%" }}
                onClick={createNewFollowRelationship}
              />
            )}
          </Box>
          <VStack>
            <HStack spacing="5">
              <HStack color="gray.600" spacing="0">
                <Text fontWeight="bold" fontSize="lg">
                  {followRelationshipInfo?.length}
                </Text>
                <Text>フォロー</Text>
              </HStack>
              <HStack color="gray.600" spacing="0">
                <Text fontWeight="bold" fontSize="lg">
                  {followerRelationshipInfo?.length}
                </Text>
                <Text>フォロワー</Text>
              </HStack>
            </HStack>
          </VStack>
          <UserPageMenu />
          <UserPagePostList user={user} />
        </Stack>
        <ToTopPageButton
          bottom={{ base: "5%", sm: "10%" }}
          right={{ base: "5%", sm: "10%", md: "25%" }}
        />
      </Box>
    </>
  );
});
