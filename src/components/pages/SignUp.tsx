import { memo } from "react";
import { SignUpForm } from "../organism/form/SignUpForm";
import { ConfirmCodeForm } from "../organism/form/ConfirmCodeForm";
import { UseSignUp } from "../../hooks/auth/UseSignUp";

export const SignUp: React.VFC = memo(() => {
  const { onSubmit, onSubmitConfirm, isLoading, isConfirmCode, email } =
    UseSignUp();
  return isConfirmCode ? (
    <ConfirmCodeForm onSubmit={onSubmitConfirm} email={email} />
  ) : (
    <SignUpForm onSubmit={onSubmit} isLoading={isLoading} />
  );
});
