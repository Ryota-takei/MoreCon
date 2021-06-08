import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { getCurrentUserInformation } from "../../features/user/userSlice";

import { useAdminCheck } from "../../hooks/auth/useAdminCheck";
import { useDisclosure } from "@chakra-ui/react";
import { NewPostModal } from "../organism/modal/NewPostModal";
import { NewPostList } from "../template/postList/NewPostList";

export const PostsPage: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [displayTitle, setDisplayTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  //カスタムフック
  const { notAdminCheck } = useAdminCheck();

  useEffect(() => {
    notAdminCheck();
    dispatch(getCurrentUserInformation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <NewPostList />
      </Box>
      <NewPostModal
        isOpen={isOpen}
        onClose={onClose}
        setDisplayTitle={setDisplayTitle}
      />
    </>
  );
});
