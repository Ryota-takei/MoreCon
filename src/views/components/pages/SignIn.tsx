import { memo, useEffect } from "react";
import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Auth } from "aws-amplify";
import { Box, VStack } from "@chakra-ui/layout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { NormalInputArea } from "../molecule/inputArea/NormalInputArea";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { useSignIn } from "../../../hooks/auth/useSignIn";
import { IconButton } from "../atom/button/IconButton";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { useAdminCheck } from "../../../hooks/auth/useAdminCheck";
import { Form } from "../organism/form/Form";
import { useTestLogin } from "../../../hooks/auth/useTestLogin";

type Location = {
  state: string;
};

export const SignIn: React.VFC = memo(() => {
  const { state } = useLocation() as Location;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });
  //カスタムフック（テストログイン）
  const { onClickLoginTestUser } = useTestLogin();
  //カスタムフック(サイン機能)
  const { handleClickLogin, isLoading } = useSignIn();
  // ログイン済のユーザーがこのページにきた際にPostページに遷移する。
  const { adminCheck } = useAdminCheck();

  useEffect(() => {
    adminCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickGoogleLogin = async () => {
    try {
      Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form heading="ログイン">
      <form onSubmit={handleSubmit(handleClickLogin)}>
        <VStack spacing="8">
          <NormalInputArea
            label="メールアドレス"
            errorMessage={errors.email?.message}
            placeholder="メールアドレス"
            name="email"
            type="email"
            registers={register("email")}
            value={state}
          />
          <NormalInputArea
            label="パスワード"
            errorMessage={errors.password?.message}
            placeholder="パスワード"
            name="password"
            type="password"
            registers={register("password")}
          />
          <SecondaryButton
            hover={{ bg: "blue.500" }}
            text="ログイン"
            bg="blue.300"
            color="white"
            type="submit"
            isLoading={isLoading}
          />
        </VStack>
      </form>
      <Box textAlign="center" mt="6">
        <IconButton
          text="Googleでログイン"
          fontWeight="semibold"
          bg="white"
          border="2px"
          borderColor="gray.700"
          color="gray.700"
          icon={FcGoogle}
          iconPosition="left"
          onClick={handleClickGoogleLogin}
        />
      </Box>
      <Box textAlign="center" mt="6">
        <SecondaryButton
          hover={{ bg: "blue.300", color: "white" }}
          text="テストユーザーでログイン"
          bg="white"
          color="blue.300"
          type="submit"
          isLoading={isLoading}
          onClick={onClickLoginTestUser}
        />
      </Box>
    </Form>
  );
});

const REQUIRE_EMAIL_MSG = "メールアドレスを記入して下さい";
const VIOLATION_EMAIL = "正しい形式で入力してください";
const REQUIRE_PASSWORD_MSG = "パスワードの記入して下さい";

const SigninSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_EMAIL_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_PASSWORD_MSG),
});
