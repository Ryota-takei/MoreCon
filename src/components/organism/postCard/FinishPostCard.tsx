import { memo, useState } from "react";
import { useHistory } from "react-router";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";

import { useGetImage } from "../../../hooks/function/useGetImage";
import { Post } from "../../../types/post/NewPots";
import { NormalButton } from "../../atom/button/NormalButton";
import { CommentCard } from "../comment/CommentCard";
import { FinishPostCardFooter } from "../../molecule/postCardFooter.tsx/FinishPostCardFooter";

type Prop = {
  post: Post;
};

export const FinishPostCard: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const history = useHistory();
  const { imageUrl } = useGetImage(post?.correspondingUser);

  const onClickPost = () => {
    history.push(`/posts/${post?.id}`);
  };

  const onClickGoWebSite = () => {
    if (post?.url) {
      window.open(post?.url);
    }
  };
  const onClickToUerPage = () => {
    history.push(`/user/${post?.correspondingUser?.displayId}`);
  };

  return (
    <>
      <Box
        w="100%"
        border="1px"
        borderColor="gray.100"
        borderRadius="10px"
        boxShadow="sm"
      >
        <HStack p="3">
          <Avatar
            src={imageUrl}
            boxSize="70px"
            _hover={{ cursor: "pointer" }}
            onClick={onClickToUerPage}
          />
          <Text fontWeight="bold">{`${post?.contributor?.name}さんの欲しいを${post?.correspondingUser?.name}さんが実現してくれました！！`}</Text>
        </HStack>
        <Box p="3">
          <HStack my="2">
            <Text fontWeight="bold">{`[${post?.correspondingUserTitle}]`}</Text>
          </HStack>
          <Box mb="2">{post?.correspondingUserMessage ?? ""}</Box>
          <Flex my="5">
            <Box>
              <NormalButton
                hover={{ bg: "blue.500" }}
                text="サイトを見に行く"
                bg="blue.300"
                color="white"
                onClick={onClickGoWebSite}
              />
            </Box>
            <Box ml="2">
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="元の投稿をみる"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                onClick={onClickPost}
              />
            </Box>
          </Flex>
        </Box>
        <FinishPostCardFooter
          post={post}
          commentsCount={commentsCount}
          setCommentsCount={setCommentsCount}
          setIsOpenComment={setIsOpenComment}
        />
      </Box>
      {isOpenComment && (
        <CommentCard
          post={post}
          setCommentsCount={setCommentsCount}
          imageUrl={imageUrl}
        />
      )}
    </>
  );
});
