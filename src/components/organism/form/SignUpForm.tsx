import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VStack } from "@chakra-ui/layout";

import { SecondaryButton } from "../../atom/button/SecondaryButton";
import { NormalInputArea } from "../../molecule/inputArea/NormalInputArea";
import { Form } from "../layout/Form";
import { memo } from "react";

type DataValue = {
  email: string;
  username: string;
  password: string;
};

type Prop = {
  onSubmit: (data: DataValue) => Promise<void>;
  isLoading: boolean;
};

export const SignUpForm: React.VFC<Prop> = memo((props) => {
  const { onSubmit, isLoading } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  return (
    <Form heading="新規登録">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            label="ユーザー名"
            errorMessage={errors.username?.message}
            placeholder="ユーザー名"
            name="username"
            type="text"
            registers={register("username")}
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
            text="登録"
            bg="blue.300"
            color="white"
            type="submit"
            isLoading={isLoading}
          />
        </VStack>
      </form>
    </Form>
  );
});

const REQUIRE_EMAIL_MSG = "メールアドレスの記入をお願いします";
const REQUIRE_USER_MSG = "ユーザーの記入をお願いします";
const REQUIRE_PASSWORD_MSG = "パスワードの記入をお願いします";
const VIOLATION_EMAIL = "正しい形式で入力してください";
const VIOLATION_NAME_COUNT = "ユーザー名は12文字以下で入力してください";
const VIOLATION_PASSWORD_COUNT = "パスワードは8文字で入力してください";

const SignupSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_EMAIL_MSG).email(VIOLATION_EMAIL),
  username: yup
    .string()
    .required(REQUIRE_USER_MSG)
    .max(12, VIOLATION_NAME_COUNT),
  password: yup
    .string()
    .required(REQUIRE_PASSWORD_MSG)
    .min(8, VIOLATION_PASSWORD_COUNT),
});
