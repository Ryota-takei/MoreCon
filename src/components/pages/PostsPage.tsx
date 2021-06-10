import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import React, { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCurrentUserInformation } from "../../features/user/userSlice";

import { useAdminCheck } from "../../hooks/auth/useAdminCheck";
import { useDisclosure } from "@chakra-ui/react";
import { NewPostModal } from "../organism/modal/NewPostModal";
import { NewPostList } from "../template/postList/NewPostList";
import { SideMenu } from "../organism/pageMenu/SideMenu";
import { selectPage } from "../../features/page/pageSlice";
import { InProductionPostList } from "../template/postList/InProductionPostList";
import { CenterMenu } from "../organism/pageMenu/CenterMenu";
import { FinishPostList } from "../template/postList/FinishPostList";

export const PostsPage: React.VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [displayTitle, setDisplayTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pageState = useAppSelector(selectPage);
  //カスタムフック(ログインしているかの確認。していなければトップページに遷移)
  const { notAdminCheck } = useAdminCheck();

  useEffect(() => {
    notAdminCheck();
    dispatch(getCurrentUserInformation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex w={{ base: "100%", md: "70%" }} mx="auto" maxW="1250px">
      <SideMenu />
      <Box w={{ base: "100%", sm: "90%", md: "75%" }} minH="100vh" mx="auto">
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
          <CenterMenu/>
        </Box>
        {pageState === "newPosts" && <NewPostList />}
        {pageState === "inProduction" && <InProductionPostList />}
        {pageState === "finish" && <FinishPostList/>}
      </Box>
      <NewPostModal
        isOpen={isOpen}
        onClose={onClose}
        setDisplayTitle={setDisplayTitle}
      />
    </Flex>
  );
});
