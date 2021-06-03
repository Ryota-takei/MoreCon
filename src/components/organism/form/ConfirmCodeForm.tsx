import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Auth } from "aws-amplify";
import { useToast } from "@chakra-ui/toast";
import { Box, VStack } from "@chakra-ui/layout";

import { Form } from "../layout/Form";
import { NormalInputArea } from "../../molecule/inputArea/NormalInputArea";
import { SecondaryButton } from "../../atom/button/SecondaryButton";

type DataValue = {
  ConfirmCode: string;
};

type Prop = {
  onSubmit: (data: DataValue) => Promise<void>;
  email: string;
};

export const ConfirmCodeForm: React.VFC<Prop> = memo((props) => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { onSubmit, email } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(ConfirmSchema),
  });

  const handleClickResend = async () => {
    setIsLoading(true);
    const username = email;
    try {
      const value = await Auth.resendSignUp(username);
      toast({
        title: "検証コードをメールアドレス宛にお送りしました",
        position: "bottom",
        isClosable: true,
      });
      console.log(value);
    } catch (error) {
      console.log(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form heading="新規登録">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="8">
          <NormalInputArea
            label="メールアドレス"
            placeholder={email}
            name="email"
            type="email"
            readonly={true}
          />
          <NormalInputArea
            label="認証コード"
            placeholder="認証コード"
            name="confirmCode"
            type="text"
            registers={register("ConfirmCode")}
            errorMessage={errors.ConfirmCode?.message}
          />
        </VStack>

        <Box textAlign="center" mt="10">
          <SecondaryButton
            hover={{ bg: "blue.500" }}
            text="登録"
            bg="blue.300"
            color="white"
            type="submit"
          />
        </Box>
      </form>
      <Box textAlign="center" mt="6">
        <SecondaryButton
          hover={{ bg: "blue.300", color: "white" }}
          text="認証コードを再送する"
          bg="white"
          color="blue.300"
          type="submit"
          isLoading={isLoading}
          onClick={handleClickResend}
        />
      </Box>
    </Form>
  );
});
const REQUIRE_CONFIRMCODE_MSG = "認証コードを入力して下さい";

const ConfirmSchema = yup.object().shape({
  ConfirmCode: yup.string().required(REQUIRE_CONFIRMCODE_MSG),
});
