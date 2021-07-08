import React, { memo, useEffect } from "react";
import { Box, HStack, Stack, Flex, Text } from "@chakra-ui/layout";
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
import { useAppSelector } from "../../../../redux/hooks";
import { selectUser } from "../../../../redux/slices/user/userSlice";
import { useFollowRelation } from "../../../../hooks/follow/useFollowRelation";
import {
  FollowInformation,
  FollowRelationshipInfo,
} from "../../../../types/follow/follow";
import { FollowButton } from "../../atom/button/FollowButton";

type Prop = {
  id?: string;
};
type UserInfo = {
  data: GetUserQuery;
};

export const UserFollowList: React.VFC<Prop> = memo((props) => {
  const { id } = props;
  const [user, setUser] = useState<GetUser>();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const loginUser = useAppSelector(selectUser);
  const history = useHistory();

  const { createNewFollowRelationship } = useFollowRelation(user);
  const { imageUrl } = useGetImage(user);

  const getUserInformation = async () => {
    try {
      const user = (await API.graphql(
        graphqlOperation(getUser, { id: id })
      )) as UserInfo;
      setUser(user.data.getUser);
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

  return (
    <Box borderBottom="1px" borderColor="gray.300" px="4" py="6">
      <Flex justifyContent="space-between">
        <HStack
          spacing="3"
          _hover={{ cursor: "pointer" }}
          onClick={() => history.push(`/user/${user?.displayId}`)}
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          <Avatar src={imageUrl} boxSize="60px" />

          <Stack>
            <Text fontWeight="bold" textAlign="left">
              {user?.name}
            </Text>
            <Text fontSize={{ base: "xs", sm: "md" }}>{user?.profile}</Text>
          </Stack>
        </HStack>
        <HStack>
          {loginUser?.id !== user?.id && !isFollowing && (
            <FollowButton
              text="フォロー"
              follow={follow}
              bg="white"
              color="blue.200"
              hover={{ cursor: "pointer", bg: "blue.50" }}
            />
          )}
          {loginUser?.id !== user?.id && isFollowing && (
            <FollowButton
              text={isMouseOver ? "フォロー解除" : "フォロー中"}
              follow={follow}
              onMouseLeave={() => {
                setIsMouseOver(false);
              }}
              onMouseOver={() => {
                setIsMouseOver(true);
              }}
              hover={{ cursor: "pointer", bg: "red.300", color: "white" }}
              bg="blue.300"
              color="white"
            />
          )}
        </HStack>
      </Flex>
    </Box>
  );
});
