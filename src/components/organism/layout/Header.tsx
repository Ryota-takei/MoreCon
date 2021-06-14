import React, { memo, useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { Auth } from "aws-amplify";
import { Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

import { NormalButton } from "../../atom/button/NormalButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getUserInformation, selectIsAdmin, selectUser } from "../../../features/user/userSlice";
import { useGetImage } from "../../../hooks/function/useGetImage";


export const Header: React.VFC = memo(() => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useAppDispatch()
  const isAdmin = useAppSelector(selectIsAdmin);
  const userInformation = useAppSelector(selectUser);
  const { imageUrl } = useGetImage(userInformation);

  const onClickSignUp = () => {
    history.push("/signup");
  }

  const onClickSignIn = () => {
    history.push("/signin");
  }

  const onClickHeading = useCallback(() => {
    history.push(isAdmin ? "/posts" : "/");
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  const onClickIcon = useCallback(() => {
    history.push(`/user/${userInformation?.displayId}`);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userInformation]);

  const onClickSignout =  async () => {
    try {
      await Auth.signOut();
      dispatch(getUserInformation(null))
      history.push("/")
    } catch (error) {
      alert("エラーが発生しました");
      console.log(error);
    }
  }

  useEffect(()=> {
    window.scrollTo(0, 0)
  },[location.pathname])

  return (
    <Box h="80px" boxShadow="md" w="100%">
      <Flex
        w={{ base: "95%", md: "90%" }}
        mx="auto"
        justifyContent="space-between"
      >
        <Box
          _hover={{ cursor: "pointer", opacity: "0.7" }}
          onClick={onClickHeading}
        >
          <Heading as="h1" fontWeight="bold" size="xl" lineHeight="80px">
            MoreCon
          </Heading>
        </Box>
        <HStack spacing="2">
          {location.pathname.includes("user") && (
            <NormalButton
              hover={{ bg: "blue.300", color: "white" }}
              text="ログアウト"
              borderColor="blue.200"
              bg="white"
              color="blue.200"
              onClick={onClickSignout}
            />
          )}
          {!isAdmin && !location.pathname.includes("user") && (
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
          {isAdmin && !location.pathname.includes("user") && (
            <Avatar
              src={imageUrl}
              boxSize="70px"
              mx="auto"
              onClick={onClickIcon}
              _hover={{ cursor: "pointer", opacity: "0.8" }}
            />
          )}
        </HStack>
      </Flex>
    </Box>
  );
});
