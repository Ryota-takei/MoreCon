import { Circle } from "@chakra-ui/layout";
import React, { memo } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useHistory } from "react-router";

type Prop = {
  text?: string;
  bottom: string | { base: string; md: string } | { base: string; sm: string };
  right:
    | string
    | { base: string; md: string }
    | { base: string; sm: string; md: string };
  onClick?: () => void;
};

export const ToTopPageButton: React.VFC<Prop> = memo((props) => {
  const { text, bottom, right, onClick } = props;
  const history = useHistory();
  const returnTopPage = () => {
    history.push("/posts");
  };

  return (
    <Circle
      size={{ base: "50", md: "55px" }}
      bg="blue.300"
      color="white"
      shadow="md"
      _hover={{ cursor: "pointer", bg: "blue.500" }}
      position="fixed"
      bottom={bottom}
      right={right}
      fontWeight="bold"
      onClick={onClick ? onClick : returnTopPage}
    >
      {text ? text : <BsArrowReturnLeft size="30px" />}
    </Circle>
  );
});
