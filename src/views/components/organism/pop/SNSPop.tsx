import { memo } from "react";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { BiShareAlt } from "react-icons/bi";
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
import { Post } from "../../../../types/post/NewPots";

type Prop = {
  post: Post;
};

export const SNSPop: React.VFC<Prop> = memo((props) => {
  const { post } = props;

  return (
    <Popover isLazy>
      {({ isOpen }) => (
        <>
          <PopoverTrigger>
            <VStack color="gray.600" w="33%" spacing="0">
              <HStack _hover={{ cursor: "pointer", opacity: "0.7" }}>
                <BiShareAlt size="25px" />
              </HStack>
            </VStack>
          </PopoverTrigger>
          {isOpen &&
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
          </PopoverContent>}
        </>
      )}
    </Popover>
  );
});
