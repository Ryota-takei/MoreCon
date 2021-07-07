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
  CreateFollowRelationshipMutation,
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
import {
  createFollowRelationship,
  deleteFollowRelationship,
} from "../../../graphql/mutations";
import {
  changePageLog,
  selectPageLog,
} from "../../../redux/slices/page/pageSlice";
import { useSelector } from "react-redux";
import { UserFollowList } from "../template/postList/UserFollowList";

type SearchUser = {
  data: SearchByDisplayIdQuery;
};

type FollowerInformation = {
  data: ListFollowRelationshipByFollowerIdQuery;
};

type FollowInformation = {
  data: ListFollowRelationshipByFollowIdQuery;
};

type CreateFollow = {
  data: CreateFollowRelationshipMutation;
};
export type FollowRelationshipInfo = {
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
  const [isFollow, setIsFollow] = useState<
    FollowRelationshipInfo | undefined
  >();
  const [followerCount, setFollowerCount] = useState(0);
  const loginUser = useAppSelector(selectUser);
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { imageUrl } = useGetImage(user);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const thankCount = user?.thankCounts?.items?.length;
  const pageState = useSelector(selectPageLog);

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
    if (isFollow) {
      const input = {
        id: isFollow.id,
      };
      try {
        await API.graphql(
          graphqlOperation(deleteFollowRelationship, { input })
        );
        setIsFollow(undefined);
        setFollowerCount((preCount) => preCount - 1);
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    } else {
      const input = {
        followId: loginUser?.id,
        followerId: user?.id,
      };
      try {
        const res = (await API.graphql(
          graphqlOperation(createFollowRelationship, { input })
        )) as CreateFollow;
        setIsFollow(res.data.createFollowRelationship);
        setFollowerCount((preCount) => preCount + 1);
      } catch (error) {
        console.log(error);
        alert("エラーが発生しました");
      }
    }
  };

  useEffect(() => {
    dispatch(getCurrentUserInformation());
    notAdminCheck();
    getUserInformation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  console.log(isFollow);

  useEffect(() => {
    if (user) {
      const getFollowInformation = async () => {
        const res = (await API.graphql(
          graphqlOperation(listFollowRelationshipByFollowerId, {
            followerId: user?.id,
          })
        )) as FollowerInformation;
        setFollowerRelationshipInfo(
          res.data.listFollowRelationshipByFollowerId?.items
        );
        setFollowerCount(
          res.data.listFollowRelationshipByFollowerId?.items?.length ?? 0
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

  useEffect(() => {
    setIsFollow(() =>
      followerRelationshipInfo?.find((res) => res?.followId === loginUser?.id)
    );
    console.log("hige");
  }, [loginUser, followerRelationshipInfo]);

  console.log(isMouseOver);
  console.log(pageState);

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
            ) : isFollow ? (
              <NormalButton
                hover={{ bg: "red.300", color: "white", text: "フォロー解除" }}
                text={isMouseOver ? "フォローを解除" : "フォロー中"}
                borderColor="blue.200"
                bg="blue.300"
                color="white"
                w={{ base: "300px", md: "40%" }}
                onClick={createNewFollowRelationship}
                onMouseOver={() => {
                  setIsMouseOver(true);
                }}
                onMouseLeave={() => {
                  setIsMouseOver(false);
                }}
              />
            ) : (
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="フォローをする"
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
              <HStack
                p="2"
                borderRadius="15px"
                spacing="0"
                onClick={() => dispatch(changePageLog("follow"))}
                _hover={{ cursor: "pointer", color: "blue.500", bg: "blue.50" }}
                color={"follow" === pageState ? "blue.500" : "gray.600"}
                bg={"follow" === pageState ? "blue.50" : undefined}
              >
                <Text fontWeight="bold" fontSize="lg">
                  {followRelationshipInfo?.length}
                </Text>
                <Text>フォロー</Text>
              </HStack>
              <HStack
                p="2"
                borderRadius="15px"
                spacing="0"
                onClick={() => dispatch(changePageLog("follower"))}
                _hover={{ cursor: "pointer", color: "blue.500", bg: "blue.50" }}
                color={"follower" === pageState ? "blue.500" : "gray.600"}
                bg={"follower" === pageState ? "blue.50" : undefined}
              >
                <Text fontWeight="bold" fontSize="lg">
                  {followerCount}
                </Text>
                <Text>フォロワー</Text>
              </HStack>
            </HStack>
          </VStack>
          <UserPageMenu />
          <Box>
            {pageState !== "follow" && pageState !== "follower" && (
              <UserPagePostList user={user} />
            )}
            {pageState === "follow" &&
              followRelationshipInfo?.map((user) => {
                return <UserFollowList id={user?.followerId} key={user?.id} />;
              })}
            {pageState === "follower" &&
              followerRelationshipInfo?.map((user) => {
                return <UserFollowList id={user?.followId} key={user?.id} />;
              })}
          </Box>
        </Stack>
        <ToTopPageButton
          bottom={{ base: "5%", sm: "10%" }}
          right={{ base: "5%", sm: "10%", md: "25%" }}
        />
      </Box>
    </>
  );
});
