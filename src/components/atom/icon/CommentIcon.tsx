import { memo } from "react";
import { BiComment } from "react-icons/bi";
import { Text, VStack } from "@chakra-ui/layout";

export const CommentIcon: React.VFC = memo(() => {
  
  return (
    <VStack spacing="0">
      <BiComment size="20px" />
      <Text fontSize="xs">コメント</Text>
    </VStack>
  );
});
