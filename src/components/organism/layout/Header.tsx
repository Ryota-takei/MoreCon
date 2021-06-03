import React, { memo, useCallback } from "react";
import { useHistory } from "react-router";
import { Auth } from "aws-amplify";
import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";

import { NormalButton } from "../../atom/button/NormalButton";
import { useAppSelector } from "../../../app/hooks";
import { selectIsAdmin } from "../../../features/user/userSlice";

export const Header: React.VFC = memo(() => {
  const history = useHistory();
  const isAdmin = useAppSelector(selectIsAdmin);

  const onClickSignUp = useCallback(() => {
    history.push("/signup");
  }, [history]);

  const onClickSignIn = useCallback(() => {
    history.push("/signin");
  }, [history]);

  const onClickSignout = async () => {
    try {
      await Auth.signOut();
      history.push("/");
    } catch (error) {
      alert("エラーが発生しました");
      console.log(error);
    }
  };

  return (
    <Box h="80px" boxShadow="md">
      <Flex
        w={{ base: "95%", md: "90%" }}
        mx="auto"
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h1" fontWeight="bold" size="xl" lineHeight="80px">
            MoreCon
          </Heading>
        </Box>
        <HStack spacing="2">
          {isAdmin ? (
            <NormalButton
              hover={{ bg: "blue.300", color: "white" }}
              text="ログアウト"
              borderColor="blue.200"
              bg="white"
              color="blue.200"
              onClick={onClickSignout}
            />
          ) : (
            <>
              <NormalButton
                hover={{ bg: "blue.500" }}
                text="新規登録"
                bg="blue.300"
                color="white"
                onClick={onClickSignUp}
              />
              <NormalButton
                hover={{ bg: "blue.300", color: "white" }}
                text="ログイン"
                borderColor="blue.200"
                bg="white"
                color="blue.200"
                onClick={onClickSignIn}
              />
            </>
          )}
        </HStack>
      </Flex>
    </Box>
  );
});
