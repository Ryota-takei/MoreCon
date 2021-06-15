import React, { memo, ReactNode } from "react";
import { Header } from "../organism/layout/Header";

type Prop = {
  children: ReactNode;
};

export const HeaderLayout: React.VFC<Prop> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
