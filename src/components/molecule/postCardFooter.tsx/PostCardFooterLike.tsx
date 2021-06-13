import { memo } from "react";
import { Stack, Text, VStack } from "@chakra-ui/layout";
import { Icon, ScaleFade } from "@chakra-ui/react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

import { useAppSelector } from "../../../app/hooks";
import { selectPage } from "../../../features/page/pageSlice";

type Prop = {
  isLike: boolean;
  onClickLikeCancel?: () => Promise<void>;
  onClickLike?: () => Promise<void>;
};

export const PostCardFooterLike: React.VFC<Prop> = memo((props) => {
  const { isLike, onClickLikeCancel, onClickLike } = props;
  const currentPage = useAppSelector(selectPage);

  return (
    <VStack color="gray.500" w="33%">
      <Stack
        _hover={{ cursor: "pointer", opacity: "0.7" }}
        textAlign="center"
        spacing="0"
        w="40px"
      >
        <VStack
          cursor="pointer"
          spacing="0"
          onClick={
            isLike && currentPage === "newPosts"
              ? onClickLikeCancel
              : onClickLike
          }
        >
          {isLike ? (
            <ScaleFade initialScale={2} in={isLike}>
            <Icon
              as={AiFillLike}
              fontSize="22px"
              color="blue.400"
            />
          </ScaleFade>
          ) : (
            <Icon as={AiOutlineLike} fontSize="20px" mt="4.5px" />
          )}
          <Text fontSize="xs" color={isLike ? "blue.400" : ""}>
            want
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
});
