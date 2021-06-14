import { memo } from "react";
import type { IconType } from "react-icons";
import { Button } from "@chakra-ui/button";
import { Text } from "@chakra-ui/layout";

type Prop = {
  text: string;
  bg: string;
  color: string;
  border: string;
  borderColor?: string;
  icon: IconType;
  iconPosition: "left" | "right";
  fontWeight?: string;
  onClick: () => void;
};

export const IconButton: React.VFC<Prop> = memo((props) => {
  return (
    <Button
      bg={props.bg}
      color={props.color}
      border={props.border}
      borderColor={props.borderColor}
      variant="outline"
      fontSize={{ base: "12px", sm: "13px" }}
      w={{ base: "80%", sm: "50%" }}
      borderRadius="15px"
      fontWeight={props.fontWeight}
      _hover={{ opacity: 0.7 }}
      onClick={props.onClick}
    >
      <Text fontSize="lg" mr="3">
        <props.icon />
      </Text>
      {props.text}
    </Button>
  );
});
