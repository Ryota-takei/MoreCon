import { memo, ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/layout";

type Prop = {
  children: ReactNode;
  heading: string;
};

export const Form: React.VFC<Prop> = memo((props) => {
  const { children, heading } = props;

  return (
    <Box bg="gray.50" minH="100Vh" w="100%" pt={{ base: "80px", md: "120px" }}>
      <Box
        bg="white"
        maxW={{ base: "95%", md: "650px" }}
        mx="auto"
        borderRadius="15px"
        boxShadow="md"
        pb="6"
      >
        <Heading size="md" textAlign="center" pt="6">
          {heading}
        </Heading>
        {children}
      </Box>
    </Box>
  );
});
