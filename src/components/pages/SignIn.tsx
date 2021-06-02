import { Box, VStack } from "@chakra-ui/layout";
import { Auth } from "aws-amplify";
import { Form } from "../organism/layout/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import { NormalInputArea } from "../molecule/inputArea/NormalInputArea";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { UseSignIn } from "../../hooks/auth/UseSignIn";
import { IconButton } from "../atom/button/IconButton";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

export const SignIn: React.VFC = () => {
  const { handleClickLogin, isLoading } = UseSignIn();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const handleClickGoogleLogin = async () => {
    try {
      const user = Auth.federatedSignIn({
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
    </Form>
  );
};

const REQUIRE_EMAIL_MSG = "メールアドレスを記入して下さい";
const VIOLATION_EMAIL = "正しい形式で入力してください";
const REQUIRE_PASSWORD_MSG = "パスワードの記入して下さい";

const SigninSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_EMAIL_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_PASSWORD_MSG),
});
