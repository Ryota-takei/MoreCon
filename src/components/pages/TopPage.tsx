import React, { memo, useCallback, useEffect, useState } from "react";
import { Auth } from "aws-amplify";
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
import introduction_dev from "../../assets/image/introduction_dev.png";
import introduction_user from "../../assets/image/introduction_user.png";
import mainVisual from "../../assets/image/mainVisual.png";
import newPosts from "../../assets/image/newPosts.png";
import inProduction from "../../assets/image/inProduction.png";
import finishPosts from "../../assets/image/finishPosts.png";
import userPage from "../../assets/image/userPage.png";
import { HowToUseCard } from "../molecule/topPageCard/HowToUseCard";

export const TopPage: React.VFC = memo(() => {
  const { isAdminCheck } = useAdminCheck();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAppSelector(selectUser);
  const email = process.env.REACT_APP_TEST_EMAIL;
  const password = process.env.REACT_APP_TEST_PASSWORD;

  const onClickLoginTestUser = useCallback(async () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Box
              backgroundImage={mainVisual}
              w="100%"
              minH={{ base: "25vh", sm: "35vh", md: "50vh", lg: "60vh" }}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="cover"
            />
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
                  text="テストユーザーでログイン"
                  onClick={onClickLoginTestUser}
                  hover={{ bg: "blue.500" }}
                  bg="blue.300"
                  color="white"
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
                src={introduction_user}
                text="こんなWebサービスやアプリがあれば便利だなと、思ったら自由に投稿してみよう"
                mr={3}
              />
              <ImageCard
                src={introduction_dev}
                text="実現できそうなアプリがあったら、実際に制作をして便利なサービスを生み出していこう"
                mt={5}
              />
            </Flex>
            <Text
              fontWeight="bold"
              fontSize="30px"
              my="10"
              w="100%"
              textAlign="center"
            >
              使いかた
            </Text>
            <Flex
              justifyContent="space-between"
              display={{ base: "block", md: "flex" }}
            >
              <HowToUseCard
                title="こんなサービスがあったら便利だなと思ったら投稿"
                url={newPosts}
                text=" あったら便利なサービスを投稿してみましょう。その投稿に対して他の方が『want』や『コメント』をしてくれたり、そのサービスを作ってくれます。
              もしくは『制作する』を押して、あなた自身が他の方のサービスを実現しましょう。"
              />
              <HowToUseCard
                title="制作中の投稿を見る"
                url={inProduction}
                text="他の人が作成しているサービスはサイドバーの『制作中』から見ることができます。『コメント』で応援しましょう。"
                mt={3}
              />
            </Flex>
            <Flex
              justifyContent="space-between"
              display={{ base: "block", md: "flex" }}
              mt={{ base: "0", md: "5" }}
            >
              <HowToUseCard
                title="完成したサービスを見る"
                url={finishPosts}
                text="完成したサービスはサイドバーの『完成』から見ることができます。実際に制作されたサービスを使ったり、『コメント』や『ありがとう』を送りましょう。"
                mt={3}
              />
              <HowToUseCard
                title="ユーザーページを見る"
                url={userPage}
                text="投稿やコメントのユーザーアイコンから他のユーザーページに訪問して、投稿履歴や制作履歴などを見ることができます。また『ありがとう』をどのくらい貰ったかを見ることができます。"
                mt={3}
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
