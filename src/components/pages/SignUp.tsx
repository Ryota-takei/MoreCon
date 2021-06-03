import { memo, useEffect } from "react";

import { SignUpForm } from "../organism/form/SignUpForm";
import { ConfirmCodeForm } from "../organism/form/ConfirmCodeForm";
import { UseSignUp } from "../../hooks/auth/UseSignUp";
import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";

export const SignUp: React.VFC = memo(() => {
  const { onSubmit, handleClickSignup, isLoading, isConfirmCode, email } =
    UseSignUp();
  const { adminCheck } = UseAdminCheck();

  useEffect(() => {
    adminCheck();
  }, []);

  return isConfirmCode ? (
    <ConfirmCodeForm onSubmit={handleClickSignup} email={email} />
  ) : (
    <SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
  );
});
