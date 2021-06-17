import { memo } from "react";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/layout";

import { Post } from "../../../../types/post/NewPots";
import { MenuBar } from "../menu/MenuBar";
import { GetUser } from "../../../../types/user/user";
import { getCreateDate } from "../../../utils/getCreateDate";
import { Avatar } from "@chakra-ui/avatar";
import { selectPage } from "../../../../redux/slices/page/pageSlice";
import { useAppSelector } from "../../../../redux/hooks";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const currentPage = useAppSelector(selectPage);

  const onClickToUerPage = () => {
    history.push(`/user/${post?.contributor?.displayId}`);
  };

  return (
    <HStack p="3">
      <Avatar
        src={imageUrl}
        boxSize="70px"
        _hover={{ cursor: "pointer" }}
        onClick={onClickToUerPage}
      />
      <Stack w="100%">
        <Flex>
          <Flex
            mr="auto"
            alignItems="center"
            _hover={{ cursor: "pointer" }}
            onClick={onClickToUerPage}
          >
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
