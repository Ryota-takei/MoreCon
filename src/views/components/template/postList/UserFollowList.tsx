import React, { memo, useEffect } from "react";
import { FollowRelationshipInfo } from "../../pages/UserPage";
import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/layout";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../../graphql/queries";
import { GetUserQuery } from "../../../../API";
import { useState } from "react";
import { GetUser } from "../../../../types/user/user";
import { useGetImage } from "../../../../hooks/function/useGetImage";
import { Avatar } from "@chakra-ui/avatar";
import { StackItem } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

type Prop = {
  id?: string;
};
type UserInfo = {
  data: GetUserQuery;
};

export const UserFollowList: React.VFC<Prop> = memo((props) => {
  const { id } = props;
  const [user, setUser] = useState<GetUser>();
  const history = useHistory()
  const { imageUrl } = useGetImage(user);

  const getUserInformation = async () => {
    const user = (await API.graphql(
      graphqlOperation(getUser, { id: id })
    )) as UserInfo;
    setUser(user.data.getUser);
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <Box
      borderBottom="1px"
      borderColor="gray.300"
      px="4"
      py="6"
      _hover={{ cursor: "pointer", bg: "gray.50" }}
      onClick={() => history.push(`/user/${user?.displayId}`)}

    >
      <HStack spacing="3">
        <Avatar src={imageUrl} boxSize="60px" />
        <Stack>
          <Box fontWeight="bold" textAlign="left">
            {user?.name}
          </Box>
          <Box>{user?.profile}</Box>
        </Stack>
      </HStack>
    </Box>
  );
});
