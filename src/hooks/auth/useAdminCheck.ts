import { Auth } from "aws-amplify";
import { useHistory } from "react-router";

import { useAppDispatch } from "../../redux/hooks";
import { getCurrentUserStatus } from "../../redux/slices/user/userSlice";

export const useAdminCheck = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

//ログインしているユーザーがサインアップもしくはサインイン画面にきたら、postページに遷移する。
  const adminCheck = async () => {
    try{
      await Auth.currentUserInfo().then((user) => {
        if (user) {
          dispatch(getCurrentUserStatus(true));
          history.push("/posts");
        } else {
          dispatch(getCurrentUserStatus(false));
        }
      });
    } catch (error) {
      console.log(error)
      alert("エラーが発生しました")
    }
  };
  // ログインユーザーでない際にはtopページに遷移する。
  const notAdminCheck = async () => {
    try{
      await Auth.currentUserInfo().then((user) => {
        if (!user) {
          dispatch(getCurrentUserStatus(false));
          history.push("/");
        } else {
          dispatch(getCurrentUserStatus(true));
        }
      });

    } catch (error){
      console.log(error)
      alert("エラーが発生しました")
    }
  };
  
  // ログインしているかどうかでUIをかえるページでのチェック。遷移は必要なし（トップページなど）
  const isAdminCheck = async () => {
    try {
      await Auth.currentUserInfo().then((user) => {
        if (user) {
          dispatch(getCurrentUserStatus(true));
        } else {
          dispatch(getCurrentUserStatus(false));
        }
      });
    } catch (error){
      console.log(error)
      alert("エラーが発生しました")
    }
  };

  return {adminCheck,  notAdminCheck, isAdminCheck };
};
