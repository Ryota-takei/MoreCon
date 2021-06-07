import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { UseGetImage } from "../../../hooks/function/UseGetImage";
import { Comment } from "../../../types/comment/CommentType";
import moment from "moment";
import NoImage from "../../../Image/NoImage.png";

type Prop = {
  comment: Comment;
};
export const CommentList: React.VFC<Prop> = (props) => {
  const { comment } = props;
  const [imageUrl, setImageUrl] = useState("");
  const { getImage } = UseGetImage(comment?.user, setImageUrl);
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

  useEffect(() => {
    getImage();
  }, [comment]);

  return (
    <Box mt="2">
      <HStack>
        <Image
          src={comment?.user?.image ? imageUrl : NoImage}
          alt="プロフィール画像"
          borderRadius="full"
          boxSize="40px"
          border="1px"
          borderColor="gray.100"
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
