import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { memo } from "react";
import { Post } from "../../../types/post/NewPots";
import { MenuBar } from "../../organism/menu/MenuBar";
import { GetUser } from "../../../types/user/user";
import { UseGetCreateDate } from "../../../hooks/function/UseGetDate";
import { Avatar } from "@chakra-ui/avatar";

type Prop = {
  post: Post ;
  loginUser: GetUser;
  imageUrl: string | undefined;
  onOpen?: () => void;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  fontWeight: string;
};

export const CardHeader: React.VFC<Prop> = memo((props) => {
  const {
    post,
    loginUser,
    imageUrl,
    setOpen,
    onOpen,
    fontWeight,
  } = props;
  const { date } = UseGetCreateDate(post?.timestamp);

  return (
    <HStack p="3">
      <Avatar
        src={imageUrl}
        boxSize="70px"
      />
      <Stack w="100%">
        <Flex>
          <Flex mr="auto" alignItems="center">
            <Heading size="sm">{post?.contributor?.name}</Heading>
            <Heading size="xs" color="gray.400" ml="1">
              さん
            </Heading>
          </Flex>
          <Flex>
            <Text color="gray.400">{date}</Text>
            {loginUser?.id === post?.contributor?.id && setOpen && onOpen ? (
              <MenuBar setIsOpen={setOpen} onOpen={onOpen} />
            ) : null}
          </Flex>
        </Flex>
        <Box>
          <Text fontWeight={fontWeight}> {post?.title}</Text>
        </Box>
      </Stack>
    </HStack>
  );
});
