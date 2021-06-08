import { memo, useEffect } from "react"
import { useAppDispatch } from "../../app/hooks";
import { getCurrentUserInformation } from "../../features/user/userSlice";
import { useAdminCheck } from "../../hooks/auth/useAdminCheck";

export const Page404:React.VFC = memo(() => {
  const dispatch = useAppDispatch()
  const { isAdminCheck } = useAdminCheck();

  useEffect(() => {
    //user情報をReduxに格納
    dispatch(getCurrentUserInformation());
    isAdminCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      404
    </div>
  )
})
