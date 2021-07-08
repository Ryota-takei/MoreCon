import React from "react";
import { Box } from "@chakra-ui/layout";

type Prop = {
  follow: () => void;
  text: string;
  bg: string;
  color: string;
  hover: { bg: string; color?: string; cursor: string };
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
};

export const FollowButton: React.VFC<Prop> = (props) => {
  const { follow, text, onMouseLeave, onMouseOver, hover, ...restProp } = props;
  return (
    <Box
      fontSize={{ base: "xs", md: "sm" }}
      borderRadius="15px"
      borderColor="blue.200"
      border="1px"
      _hover={hover}
      py="2"
      px={{ base: "4", sm: "5" }}
      fontWeight="bold"
      minW={{ base: "110px", sm: "130px" }}
      textAlign="center"
      onClick={follow}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      {...restProp}
    >
      {text}
    </Box>
  );
};
