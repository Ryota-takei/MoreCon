import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

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
          <Box w={{ base: "90%", md: "50%" }} my="auto" mx="auto">
            <Text
              fontSize={{ base: "24px", md: "25px" }}
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
              fontSize={{ base: "15px", md: "18px" }}
              mt="6"
            >
              {text}
            </Text>
          </Box>
          <Box
            w={{ base: "90%", md: "50%" }}
            pt={{ base: "5", md: "" }}
            my="auto"
            mx="auto"
          >
            <Image src={url} />
          </Box>{" "}
        </>
      ) : (
        <>
          <Box
            w={{ base: "90%", md: "50%" }}
            display={{ base: "none", md: "block" }}
            mt={{ base: "5", md: "" }}
            my="auto"
            mx="auto"
          >
            <Image src={url} />
          </Box>
          <Box w={{ base: "90%", md: "50%" }} my="auto" mx="auto">
            <Text
              fontWeight="bold"
              fontSize={{ base: "22px", md: "25px" }}
              pb="2"
              textAlign="center"
            >
              {title}
            </Text>
            <hr style={{ width: "50%", margin: "auto" }} />
            <Text
              letterSpacing={{ base: "", md: "wide" }}
              fontWeight="semibold"
              fontSize={{ base: "15px", md: "18px" }}
              mt="6"
            >
              {text}
            </Text>
          </Box>
          <Box
            w={{ base: "90%", md: "50%" }}
            display={{ base: "block", md: "none" }}
            pt={{ base: "3", md: "" }}
            my="auto"
            mx="auto"
          >
            <Image src={url} />
          </Box>
        </>
      )}
    </Box>
  );
};

