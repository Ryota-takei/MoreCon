import { memo, useEffect } from "react";

import { SignUpForm } from "../organism/form/SignUpForm";
import { ConfirmCodeForm } from "../organism/form/ConfirmCodeForm";
import { useSignUp } from "../../hooks/auth/useSignUp";
import { useAdminCheck } from "../../hooks/auth/useAdminCheck";

export const SignUp: React.VFC = memo(() => {
  //カスタムフック
  const { onSubmit, handleClickSignup, isLoading, isConfirmCode, email } =
    useSignUp();
  const { adminCheck } = useAdminCheck();

  useEffect(() => {
    adminCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isConfirmCode ? (
    <ConfirmCodeForm onSubmit={handleClickSignup} email={email} />
  ) : (
    <SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
  );
});
