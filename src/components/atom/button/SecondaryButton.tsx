import { memo } from "react";
import { Button } from "@chakra-ui/button";

type Prop = {
  borderColor?: string;
  color: string;
  bg: string;
  text: string;
  hover: { bg: string; color?: string };
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
};

export const SecondaryButton: React.VFC<Prop> = memo((props) => {
  const { text, hover, onClick, type, isLoading, ...inputProps } = props;
  
  return (
    <Button
      {...inputProps}
      _hover={hover}
      fontSize={{ base: "14px" }}
      border="1px"
      borderRadius="15px"
      p={{ base: "3", md: "5" }}
      onClick={onClick}
      type={type}
      w={{ base: "80%", sm: "50%" }}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
});
