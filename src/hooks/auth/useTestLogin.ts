import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

export const useTestLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
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
  return { onClickLoginTestUser ,isLoading};
};
