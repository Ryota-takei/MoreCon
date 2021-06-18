import { HStack, Text } from "@chakra-ui/layout";

type Prop = {
  text: string;
  onClick?: () => void;
  bg:string
  color:string
};

export const NewPost: React.VFC<Prop> = (props) => {
  const { text, onClick,color,bg  } = props;
  return (
    <HStack
      p="2"
      borderRadius="25px"
      fontSize={{ base: "14px", sm: "18px" }}
      spacing="2"
      fontWeight="bold"
      _hover={{ cursor: "pointer", bg: "blue.500" }}
      onClick={onClick}
      color={color}
      bg={bg}
      w={{ base: "33%", md: "100%" }}
    >
      <Text mx="auto">{text}</Text>
    </HStack>
  );
};