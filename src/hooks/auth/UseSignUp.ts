import { useState } from "react";
import { useHistory } from "react-router";
import { Auth } from "aws-amplify";
import { useToast } from "@chakra-ui/toast";

type DataValue = {
  email: string;
  username: string;
  password: string;
};

type DataConfirmValue = {
  ConfirmCode: string;
};

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isConfirmCode, setIsConfirmCode] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const onSubmit = async (data: DataValue) => {
    setIsLoading(true);
    console.log(data);
    try {
      await Auth.signUp({
        username: data.email,
        password: data.password,
        attributes: {
          email: data.email,
          nickname: data.username,
        },
      });
      toast({
        title: "検証コードをメールアドレス宛にお送りしました",
        position: "bottom",
        isClosable: true,
      });
      setEmail(data.email);
      setIsConfirmCode(true);
    } catch (error) {
      if (error.code === "UsernameExistsException") {
        toast({
          title: "既にご登録済のアドレスになります",
          status: "error",
          isClosable: true,
        });
      } else {
        console.log("error signing up:", error);
        alert("エラーが発生しました。");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickSignup = async (data: DataConfirmValue) => {
    const username = email;
    const code = data.ConfirmCode;
    console.log(data);

    try {
      const user = await Auth.confirmSignUp(username, code);
      console.log(user);
      toast({
        title:
          "セキュリティーの理由からお手数をお掛けしますが、ログインをお願いします",
        isClosable: true,
        position: "top",
      });
      history.push({ pathname: "/signin", state: username });
    } catch (error) {
      if (error.code === "CodeMismatchException") {
        toast({
          title: "認証コードが一致しません。お間違いないかご確認下さい",
          status: "error",
          isClosable: true,
        });
      } else {
        console.log(error);
        alert("エラーが発生しました。");
      }
    }
  };
  return { onSubmit, handleClickSignup, isLoading, isConfirmCode, email };
};
