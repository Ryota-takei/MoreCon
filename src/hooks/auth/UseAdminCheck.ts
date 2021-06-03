import { Auth } from "aws-amplify";
import { useHistory } from "react-router";

import { useAppDispatch } from "../../app/hooks";
import { getCurrentUserStatus } from "../../features/user/userSlice";

export const UseAdminCheck = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const adminCheck = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (user) {
        dispatch(getCurrentUserStatus(true));
        history.push("/posts");
      } else {
        dispatch(getCurrentUserStatus(false));
      }
    });
  };
  const notAdminCheck = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (!user) {
        dispatch(getCurrentUserStatus(false));
        history.push("/");
      } else {
        dispatch(getCurrentUserStatus(true));
      }
    });
  };

  const isAdminCheck = async () => {
    await Auth.currentUserInfo().then((user) => {
      if (user) {
        dispatch(getCurrentUserStatus(true));
      } else {
        dispatch(getCurrentUserStatus(false));
      }
    });
  };

  return { adminCheck, notAdminCheck, isAdminCheck };
};
