import { HStack, Text } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type Prop = {
  text: string;
  children?: ReactNode;
  onClick?: () => void;
  page?: string;
  pageState?: string;
};

export const Menu: React.VFC<Prop> = (props) => {
  const { children, text, onClick, page, pageState } = props;
  return (
    <HStack
      p={{ base: "2", md: "3" }}
      borderRadius="15px"
      fontSize={{ base: "14px", sm: "18px" }}
      spacing="2"
      fontWeight="bold"
      _hover={{ cursor: "pointer", color: "blue.500", bg: "blue.50" }}
      onClick={onClick}
      color={page === pageState ? "blue.500" : "gray.600"}
      bg={page === pageState ? "blue.50" : undefined}
      w={{ base: "33%", md: "100%" }}
    >
      {children}
      <Text mx="auto">{text}</Text>
    </HStack>
  );
};
