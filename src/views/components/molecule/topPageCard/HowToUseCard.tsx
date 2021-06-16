import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";

type Prop = {
  title: string;
  url: string;
  text: string;
  mt?: number;
  isEven?: boolean;
};

export const HowToUseCard: React.VFC<Prop> = (props) => {
  const { title, url, text, mt, isEven = false } = props;
  return (
    <Box
      w="100%"
      p="5"
      mt={{ base: mt, md: "5" }}
      mx="auto"
      display={{ base: "block", md: "flex" }}
    >
      {isEven ? (
        <>
          <Box w={{ base: "90%", md: "50%" }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              pb="2"
              textAlign="center"
            >
              {title}
            </Text>
            <hr style={{ width: "50%", margin: "auto" }} />
            <Text
              letterSpacing={{ base: "", md: "wide" }}
              fontWeight="semibold"
              mt="6"
            >
              {text}
            </Text>
          </Box>
          <Box w={{ base: "90%", md: "50%" }} mt={{ base: "3", md: "" }}>
            <Image src={url} />
          </Box>{" "}
        </>
      ) : (
        <>
          <Box
            w={{ base: "90%", md: "50%" }}
            display={{ base: "none", md: "flex" }}
            mt={{ base: "3", md: "" }}
          >
            <Image src={url} />
          </Box>
          <Box w={{ base: "90%", md: "50%" }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              pb="2"
              textAlign="center"
            >
              {title}
            </Text>
            <hr style={{ width: "50%", margin: "auto" }} />
            <Text
              letterSpacing={{ base: "", md: "wide" }}
              fontWeight="semibold"
              mt="6"
            >
              {text}
            </Text>
          </Box>
          <Box
            w={{ base: "90%", md: "50%" }}
            display={{ base: "flex", md: "none" }}
            mt={{ base: "3", md: "" }}
          >
            <Image src={url} />
          </Box>
        </>
      )}
    </Box>
  );
};
