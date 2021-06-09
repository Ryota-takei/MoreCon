import { Box, Text, VStack } from "@chakra-ui/layout";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import React, { memo } from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectPage } from "../../../features/page/pageSlice";

type Prop = {
  isLike: boolean;
  onClickLikeCancel: () => Promise<void>;
  onClickLike: () => Promise<void>;
};

export const PostCardFooterLike: React.VFC<Prop> = memo((props) => {
  const { isLike, onClickLikeCancel, onClickLike } = props;
  const currentPage = useAppSelector(selectPage);
  return (
    <VStack
      color="gray.500"
      _hover={{ cursor: "pointer", opacity: "0.7" }}
      w="33%"
      spacing="0"
      onClick={
        isLike && currentPage === "newPosts" ? onClickLikeCancel : onClickLike
      }
    >
      {isLike ? (
        <>
          <Box color="blue.400">
            <AiFillLike size="20px" />
          </Box>
          <Text fontSize="xs" color="blue.400">
            want
          </Text>
        </>
      ) : (
        <>
          <AiOutlineLike size="20px" />
          <Text fontSize="xs">want</Text>
        </>
      )}
    </VStack>
  );
});
