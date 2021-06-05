import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";

import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";
import { useDisclosure } from "@chakra-ui/react";
import { NewPostModal } from "../organism/modal/NewPostModal";

export const PostsPage: React.VFC = memo(() => {
  const { notAdminCheck } = UseAdminCheck();
  const dispatch = useAppDispatch();
  const userInformation = useAppSelector(selectUser);
  const [displayTitle, setDisplayTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(userInformation);

  useEffect(() => {
    notAdminCheck();
    dispatch(getCurrentUserInformation());
  }, []);

  return (
    <>
      <Box w={{ base: "100", md: "50%" }} minH="100vh" mx="auto">
        <Box textAlign="center" w="100%" mt="3">
          <Input
            w="80%"
            borderRadius="full"
            readOnly={true}
            placeholder="欲しいサービスを書いてみよう"
            _hover={{ cursor: "pointer", bg: "gray.50" }}
            onClick={onOpen}
            value={displayTitle}
          />
        </Box>
      </Box>
      <NewPostModal
        isOpen={isOpen}
        onClose={onClose}
        setDisplayTitle={setDisplayTitle}
      />
    </>
  );
});
