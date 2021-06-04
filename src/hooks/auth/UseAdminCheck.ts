import { Auth } from "aws-amplify";
import { useHistory } from "react-router";

import { useAppDispatch } from "../../app/hooks";
import { getCurrentUserStatus } from "../../features/user/userSlice";

export const UseAdminCheck = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

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

  return { adminCheck, notAdminCheck, isAdminCheck };
};
