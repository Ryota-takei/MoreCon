import React, { memo } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IconButton } from "@chakra-ui/button";
import { MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/menu";

type Prop = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOpen?: () => void;
  
};

export const MenuBar: React.VFC<Prop> = memo((props) => {
  const { setIsOpen, onOpen } = props;

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BsThreeDots />}
          outline="none"
          bg="white"
          color="gray.400"
          h="6"
          _hover={{ outline: "none", bg: "white" }}
        />
        <MenuList>
          <MenuItem onClick={() => setIsOpen(true)}>削除する</MenuItem>
            <MenuItem onClick={onOpen}>編集する</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});
