import { memo } from "react";
import { SignUpForm } from "../organism/form/SignUpForm";
import { ConfirmCodeForm } from "../organism/form/ConfirmCodeForm";
import { UseSignUp } from "../../hooks/auth/UseSignUp";

export const SignUp: React.VFC = memo(() => {
  const { onSubmit, handleClickSignup, isLoading, isConfirmCode, email } =
    UseSignUp();
  return isConfirmCode ? (
    <ConfirmCodeForm onSubmit={handleClickSignup} email={email} />
  ) : (
    <SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
  );
});
