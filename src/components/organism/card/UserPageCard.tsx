import { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Flex, HStack, Stack, Text } from "@chakra-ui/layout";

import { WantPost } from "../../../types/post/WantPost";
import { PostStatusButton } from "../../atom/button/PostStatusButton";

type Prop = {
  post: WantPost;
};

export const UserPageCard: React.VFC<Prop> = memo((props) => {
  const { post } = props;

  const history = useHistory();
  const [postStatus, setPostStatus] = useState<string | undefined>("");

  const onClickCard = () => {
    history.push(`/posts/${post?.id}`);
  };

  useEffect(() => {
    setPostStatus(() => {
      if (post?.type === "new") {
        return "未作成";
      } else if (post?.type === "inProduction") {
        return "製作中";
      } else if (post?.type === "finish") {
        return "完成";
      }
    });
  }, [post?.type]);

  return (
    <Stack
      borderBottom="1px"
      borderColor="gray.300"
      px="4"
      py="6"
      _hover={{ cursor: "pointer", bg: "gray.50" }}
      onClick={onClickCard}
    >
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">{post?.title}</Text>
        <PostStatusButton text={postStatus} isDisable={true} />
      </Flex>
      <HStack>
        <Flex color="gray.300">
          <Text>{post?.likeCount ?? 0}</Text>
          <Text ml="1" size="sm" fontSize="sm">
            want
          </Text>
          <Text ml="4">{post?.comments?.items?.length ?? 0}</Text>
          <Text ml="1" fontSize="sm">
            コメント
          </Text>
        </Flex>
      </HStack>
    </Stack>
  );
});
