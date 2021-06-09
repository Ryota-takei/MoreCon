import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { memo } from "react";
import { Post } from "../../../types/post/NewPots";
import { MenuBar } from "../menu/MenuBar";
import { GetUser } from "../../../types/user/user";
import { getCreateDate } from "../../../function/getCreateDate";
import { Avatar } from "@chakra-ui/avatar";
import { useAppSelector } from "../../../app/hooks";
import { selectPage } from "../../../features/page/pageSlice";

type Prop = {
  post: Post;
  loginUser: GetUser;
  imageUrl: string | undefined;
  onOpen?: () => void;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  fontWeight: string;
};

export const CardHeader: React.VFC<Prop> = memo((props) => {
  const { post, loginUser, imageUrl, setOpen, onOpen, fontWeight } = props;
  const currentPage = useAppSelector(selectPage);

  return (
    <HStack p="3">
      <Avatar src={imageUrl} boxSize="70px" />
      <Stack w="100%">
        <Flex>
          <Flex mr="auto" alignItems="center">
            <Heading size="sm">{post?.contributor?.name}</Heading>
            <Heading size="xs" color="gray.400" ml="1">
              さん
            </Heading>
          </Flex>
          <Flex>
            <Text color="gray.400">{getCreateDate(post?.timestamp)}</Text>
            {loginUser?.id === post?.contributor?.id &&
              setOpen &&
              onOpen &&
              currentPage === "newPosts" && (
                <MenuBar setIsOpen={setOpen} onOpen={onOpen} />
              )}
          </Flex>
        </Flex>
        <Box>
          <Text fontWeight={fontWeight}> {post?.title}</Text>
        </Box>
      </Stack>
    </HStack>
  );
});
