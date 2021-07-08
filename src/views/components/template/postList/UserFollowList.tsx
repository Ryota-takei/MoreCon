import React, { memo, useEffect } from "react";
import { Box, HStack, Stack, Text, VStack, Flex } from "@chakra-ui/layout";
import { API, graphqlOperation } from "aws-amplify";
import {
  getUser,
  listFollowRelationshipByFollowId,
} from "../../../../graphql/queries";
import { GetUserQuery } from "../../../../API";
import { useState } from "react";
import { GetUser } from "../../../../types/user/user";
import { useGetImage } from "../../../../hooks/function/useGetImage";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import { Loading } from "../../atom/Loading/Loading";
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/slices/user/userSlice";
import { useFollowRelation } from "../../../../hooks/follow/useFollowRelation";
import {
  FollowInformation,
  FollowRelationshipInfo,
} from "../../../../types/follow/follow";

type Prop = {
  id?: string;
};
type UserInfo = {
  data: GetUserQuery;
};

export const UserFollowList: React.VFC<Prop> = memo((props) => {
  const { id } = props;
  const [user, setUser] = useState<GetUser>();
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const loginUser = useAppSelector(selectUser);
  const {
    followerRelationshipInfo,
    followRelationshipInfo,
    isFollow,
    followerCount,
    createNewFollowRelationship,
  } = useFollowRelation(user);
  const history = useHistory();
  const { imageUrl } = useGetImage(user);

  const getUserInformation = async () => {
    setIsLoading(true);
    try {
      const user = (await API.graphql(
        graphqlOperation(getUser, { id: id })
      )) as UserInfo;
      setUser(user.data.getUser);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };

  const getFollowInfo = async () => {
    try {
      const res = (await API.graphql(
        graphqlOperation(listFollowRelationshipByFollowId, {
          followId: loginUser?.id,
        })
      )) as FollowInformation;
      const checkFollow = () =>
        res.data.listFollowRelationshipByFollowId?.items?.find(
          (item) => item?.followerId === id
        ) as FollowRelationshipInfo;
      console.log(checkFollow());
      setIsFollowing(checkFollow() !== undefined);
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };
  const follow = () => {
    setIsFollowing((pre) => !pre);
    createNewFollowRelationship();
  };

  useEffect(() => {
    getUserInformation();
    getFollowInfo();
  }, []);

  console.log(isFollow);
  console.log(isFollowing);
  useEffect(() => {}, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box borderBottom="1px" borderColor="gray.300" px="4" py="6">
          <Flex justifyContent="space-between">
            <HStack
              spacing="3"
              _hover={{ cursor: "pointer" }}
              onClick={() => history.push(`/user/${user?.displayId}`)}
            >
              <Avatar src={imageUrl} boxSize="60px" />

              <Stack>
                <Box fontWeight="bold" textAlign="left">
                  {user?.name}
                </Box>
                <Box fontSize={{ base: "xs", sm: "md" }}>{user?.profile}</Box>
              </Stack>
            </HStack>
            <HStack>
              {loginUser?.id !== user?.id && !isFollowing && (
                <Box
                  h={{ base: "25px", sm: "32px" }}
                  fontSize={{ base: "xs", sm: "md" }}
                  borderRadius="15px"
                  borderColor="blue.200"
                  border="1px"
                  bg="white"
                  color="blue.200"
                  _hover={{ cursor: "pointer", bg: "blue.50" }}
                  py="1"
                  px={{ base: "4", sm: "5" }}
                  fontWeight="bold"
                  minW={{ base: "100px", sm: "120px" }}
                  textAlign="center"
                  onClick={follow}
                >
                  フォロー
                </Box>
              )}
              {loginUser?.id !== user?.id && isFollowing && (
                <Box
                  h={{ base: "25px", sm: "32px" }}
                  fontSize={{ base: "xs", sm: "md" }}
                  bg="blue.300"
                  borderRadius="15px"
                  color="white"
                  py="1"
                  px={{ base: "4", sm: "3" }}
                  fontWeight="bold"
                  minW={{ base: "100px", sm: "120px" }}
                  textAlign="center"
                  _hover={{ bg: "red.300", color: "white" }}
                  onMouseOver={() => {
                    setIsMouseOver(true);
                  }}
                  onMouseLeave={() => {
                    setIsMouseOver(false);
                  }}
                  onClick={follow}
                >
                  {isMouseOver ? "フォロー解除" : "フォロー中"}
                </Box>
              )}
            </HStack>
          </Flex>
        </Box>
      )}
    </>
  );
});
