import { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AiOutlineHeart } from "react-icons/ai";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

import { useGetImage } from "../../../hooks/function/useGetImage";
import { Post } from "../../../types/post/NewPots";
import { NormalButton } from "../../atom/button/NormalButton";
import { PostStatusButton } from "../../atom/postCardFooter/PostStatusButton";
import { CommentCount } from "../../molecule/postCardFooter.tsx/CommentCount";
import { CommentIconText } from "../../molecule/postCardFooter.tsx/CommentIconText";
import { CommentCard } from "../comment/CommentCard";
import { SNSPop } from "../pop/SNSPop";

type Prop = {
  post: Post;
};

export const FinishPostCard: React.VFC<Prop> = memo((props) => {
  const { post } = props;
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const { imageUrl } = useGetImage(post?.correspondingUser);
  const history = useHistory();

  const onClickPost = () => {
    history.push(`/posts/${post?.id}`);
  };

  const onClickGoWebSite = () => {
    if (post?.url) {
      window.open(post?.url);
    }
  };

  useEffect(() => {
    setCommentCount(post?.comments?.items?.length ?? 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Avatar src={imageUrl} boxSize="70px" />
          <Text fontWeight="bold">{`${post?.contributor?.name}さんの欲しいを${post?.correspondingUser?.name}さんが実現してくれました！！`}</Text>
        </HStack>
        <Box p="3">
          <HStack my="2">
            <Text fontWeight="bold">{`[${post?.correspondingUserTitle}]`}</Text>
          </HStack>
          <Box mb="2">{post?.correspondingUserMessage ?? ""}</Box>
          <Flex>
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
        <Flex borderTop="1px" borderColor="gray.200" p="1">
          <VStack w="33%" spacing="0">
            <HStack>
              <Text>20ありがとう</Text>
            </HStack>
          </VStack>
          <VStack w="33%" spacing="0">
            <CommentCount commentCount={commentCount} />
          </VStack>
          <VStack w="33%" spacing="0">
            <HStack>
              <SNSPop post={post} />
            </HStack>
          </VStack>
        </Flex>
        <Flex borderTop="1px" borderColor="gray.200" p="1">
          <VStack
            color="gray.500"
            _hover={{ cursor: "pointer", opacity: "0.7" }}
            w="33%"
            spacing="0"
          >
            <AiOutlineHeart size="20px" />
            <Text fontSize="xs">ありがとう</Text>
          </VStack>
          <CommentIconText setIsOpenComment={setIsOpenComment} />
          <VStack w="33%" spacing="0">
            <HStack h="100%">
              <PostStatusButton text="完成" />
            </HStack>
          </VStack>
        </Flex>
      </Box>
      {isOpenComment && (
        <CommentCard
          post={post}
          imageUrl={imageUrl}
          setCommentCount={setCommentCount}
        />
      )}
    </>
  );
});
