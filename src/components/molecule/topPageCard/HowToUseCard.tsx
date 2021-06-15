import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type Prop = {
  title: string
  url:string 
  text: string
  mt?: number;
}

export const HowToUseCard: React.VFC<Prop> = (props) => {
  const {title, url, text, mt} = props
  return (
    <Box
      w={{ base: "90%", md: "49%" }}
      border="1px"
      borderColor="gray.100"
      borderRadius="20px"
      p="5"
      mt={{ base: mt, md: "0" }}
      boxShadow="md"
      mx="auto"
    >
      <Text fontSize="lg" fontWeight="bold" pb="2" textAlign="center">
       {title}
      </Text>
      <Image src={url} />
      <hr style={{ width: "80%", margin: "auto" }} />
      <Text fontWeight="semibold" mt="2">
      {text}
      </Text>
    </Box>
  );
};
