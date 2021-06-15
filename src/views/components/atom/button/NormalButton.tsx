import { memo } from "react";
import { Button } from "@chakra-ui/button";

type Prop = {
  borderColor?: string;
  color: string;
  bg: string;
  w?: { base: string; md: string };
  text: string;
  hover: { bg: string; color?: string };
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  px?: string;
};

export const NormalButton: React.VFC<Prop> = memo((props) => {
  const { text, hover, ...inputProps } = props;

  return (
    <Button
      {...inputProps}
      _hover={hover}
      fontSize={{ base: "14px" }}
      border="1px"
      borderRadius="15px"
      p={{ base: "3", md: "5" }}
    >
      {text}
    </Button>
  );
});
