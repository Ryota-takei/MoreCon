import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { memo } from "react";
import { NormalButton } from "../atom/button/NormalButton";
import { ImageCard } from "../organism/topPageCard/ImageCard";

export const TopPage: React.VFC = memo(() => {
  return (
    <>
      <Box maxW="1250px" mx="auto" mb="60px">
        <Box
          mt={{ base: "3", md: "6" }}
          w={{ base: "90%", md: "80%" }}
          mx="auto"
        >
          <Image src="./mainVisual.png" alt="メインヴィジュアル" w="100%" />
          <Text fontWeight="bold" fontSize={{ base: "lg", md: "30px" }} mt="3">
            もっと便利に住みやすく
          </Text>
          <Box mt="4">
            <NormalButton
              color="blue.200"
              text="テストログイン"
              bg="white"
              hover={{ bg: "blue.300", color: "white" }}
            />
          </Box>
          <Flex
            mt="4"
            justifyContent="space-between"
            w="95%"
            mx="auto"
            display={{ base: "block", md: "flex" }}
          >
            <ImageCard
              src="./introduction_user.png"
              text="こんなWebサービスやアプリがあれば便利だなと、思ったら自由に投稿してみよう"
              mr={3}
            />
            <ImageCard
              src="./introduction_dev.png"
              text="実現できそうなアプリがあったら、実際に制作をして便利なサービスを生み出していこう"
              mt={5}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
});
