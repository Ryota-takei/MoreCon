import { memo } from "react";
import { HStack, VStack } from "@chakra-ui/layout";

import { CommentIcon } from "../../atom/icon/CommentIcon";

type Prop = {
  setIsOpenComment: (value: React.SetStateAction<boolean>) => void;
};

export const CommentIconText: React.VFC<Prop> = memo((props) => {
  const { setIsOpenComment } = props;

  return (
    <VStack
      color="gray.500"
      _hover={{ cursor: "pointer", opacity: "0.7" }}
      w="33%"
      spacing="0"
      onClick={() => setIsOpenComment((preVal) => !preVal)}
    >
      <HStack h="100%">
        <CommentIcon />
      </HStack>
    </VStack>
  );
});
