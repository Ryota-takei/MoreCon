import React, { memo, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

import { useAdminCheck } from "../../hooks/auth/useAdminCheck";
import { NormalButton } from "../atom/button/NormalButton";
import { ImageCard } from "../molecule/topPageCard/ImageCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getCurrentUserInformation,
  selectUser,
} from "../../features/user/userSlice";
import { ToTopPageButton } from "../atom/button/ToTopPageButton";
import { useHistory } from "react-router";
import { Loading } from "../atom/Loading/Loading";

export const TopPage: React.VFC = memo(() => {
  const { isAdminCheck } = useAdminCheck();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAppSelector(selectUser);
  const email = process.env.REACT_APP_TEST_EMAIL;
  const password = process.env.REACT_APP_TEST_PASSWORD;

  const onClickLoginTestUser = async () => {
    setIsLoading(true);
    try {
      if (email && password) {
        await Auth.signIn(email, password);
      } else {
        throw new Error("ログインに失敗しました");
      }
      setIsLoading(false);
      history.push("/posts");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("エラーが発生しました");
    }
  };

  useEffect(() => {
    //user情報をReduxに格納
    dispatch(getCurrentUserInformation());
    isAdminCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Box maxW="1250px" mx="auto" mb="60px">
          <Box
            mt={{ base: "3", md: "6" }}
            w={{ base: "90%", md: "80%" }}
            mx="auto"
          >
            <Image src="./mainVisual.png" alt="メインヴィジュアル" w="100%" />
            <Text
              fontWeight="bold"
              fontSize={{ base: "lg", md: "30px" }}
              mt="3"
            >
              もっと便利に住みやすく
            </Text>
            {!currentUser && (
              <Box mt="4">
                <NormalButton
                  color="blue.200"
                  text="テストユーザーでログイン"
                  bg="white"
                  onClick={onClickLoginTestUser}
                  hover={{ bg: "blue.300", color: "white" }}
                />
              </Box>
            )}
            <Flex
              mt="4"
              justifyContent="space-between"
              w="95%"
              mx="auto"
              display={{ base: "block", md: "flex" }}
            >
              <ImageCard
                src="./introduction_user.png"
                text="こんなWebサービスやアプリがあれば便利だなと、思ったら自由に投稿してみよう"
                mr={3}
              />
              <ImageCard
                src="./introduction_dev.png"
                text="実現できそうなアプリがあったら、実際に制作をして便利なサービスを生み出していこう"
                mt={5}
              />
            </Flex>
          </Box>
        </Box>
      )}
      {currentUser && (
        <ToTopPageButton
          bottom={{ base: "5%", sm: "10%" }}
          right="5%"
          text="TOP"
        />
      )}
    </>
  );
});
