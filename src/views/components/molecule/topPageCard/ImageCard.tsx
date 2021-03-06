import { memo } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

type Prop = {
  src: string;
  text: string;
  mr?: number;
  mt?: number;
};

export const ImageCard: React.VFC<Prop> = memo((props) => {
  const { src, text, mr, mt = 0 } = props;

  return (
    <Box
      border="1px"
      borderColor="gray.100"
      borderRadius="20px"
      mr={mr}
      mt={{ base: mt, md: "0" }}
      boxShadow="md"
    >
      <Image src={src}/>
      <Text  w="90%" mx="auto" pb="10">
        {text}
      </Text>
    </Box>
  );
});
