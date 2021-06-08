import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import {
  TwitterShareButton,
  FacebookShareButton,
  TwitterIcon,
  FacebookIcon,
} from "react-share";
import React, { memo, ReactNode } from "react";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Post } from "../../../types/post/NewPots";

type Prop = {
  children: ReactNode;
  post: Post;
};

export const Pop: React.VFC<Prop> = memo((props) => {
  const { children, post } = props;

  return (
    <Popover isLazy>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader color="black" ml="5" mr="5">
          共有
        </PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <VStack>
            <HStack spacing="10">
              <Box color="blue.600" _hover={{ cursor: "pointer" }}>
                <TwitterShareButton
                  url={`https://www.morecon.net/${post?.id}`}
                  title={post?.title}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </Box>
              <Box color="blue.300" _hover={{ cursor: "pointer" }}>
                <FacebookShareButton
                  url={`https://www.morecon.net/${post?.id}`}
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </Box>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
});
