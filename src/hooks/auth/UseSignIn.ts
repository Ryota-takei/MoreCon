import { useToast } from "@chakra-ui/toast";
import { useState } from "react";
import { useHistory } from "react-router";
import { Auth } from "aws-amplify";

export const UseSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  type DataValue = {
    email: string;
    password: string;
  };

  const handleClickLogin = async (data: DataValue) => {
    setIsLoading(true);
    try {
      const userData = await Auth.signIn(data.email, data.password);
      console.log(userData);
      setIsLoading(false);
      history.push("/posts");
    } catch (error) {
      if (error.code === "UserNotFoundException" || "NotAuthorizedException") {
        toast({
          title: "アドレスもしくはパスワードが違います",
          status: "error",
          isClosable: true,
        });
      } else {
        console.log(error);
        alert("エラーが発生しました");
      }
      setIsLoading(false);
    }
  };
  return { handleClickLogin, isLoading };
};
