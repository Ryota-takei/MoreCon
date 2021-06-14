import { useHistory } from "react-router";
import moment from "moment";
import { Avatar } from "@chakra-ui/avatar";

import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { useGetImage } from "../../../hooks/function/useGetImage";
import { Comment } from "../../../types/comment/CommentType";

type Prop = {
  comment: Comment;
};
export const CommentList: React.VFC<Prop> = (props) => {
  const { comment } = props;
  const history = useHistory();
  const { imageUrl } = useGetImage(comment?.user);
  const now = moment();

  const calcTimestampDiff = (timestamp?: number) => {
    const scales = [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
    ];

    if (timestamp) {
      for (let i = 0; i < scales.length; i++) {
        const scale: any = scales[i];
        const diff = moment(now).diff(timestamp * 1000, scale);
        if (diff > 0) return diff + scale.charAt(0);
      }

      return 0 + scales[scales.length - 1].charAt(0);
    }
  };

  const onClickToUerPage = () => {
    history.push(`/user/${comment?.user?.displayId}`);
  };

  return (
    <Box mt="2">
      <HStack>
        <Avatar
          src={imageUrl}
          boxSize="40px"
          _hover={{ cursor: "pointer" }}
          onClick={onClickToUerPage}
        />
        <Stack borderRadius="15px" bg="gray.100" p="3" spacing="0">
          <Flex justifyContent="space-between">
            <Text fontSize="sm" fontWeight="bold">
              {comment?.user?.name}
            </Text>
            <Text color="gray.400" ml="3">
              {calcTimestampDiff(comment?.timestamp)}
            </Text>
          </Flex>
          <Text>{comment?.content}</Text>
        </Stack>
      </HStack>
    </Box>
  );
};
