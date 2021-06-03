import React, { memo, useEffect } from "react";

import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";

export const ProfilePage: React.VFC = memo(() => {
  const { notAdminCheck } = UseAdminCheck();

  useEffect(() => {
    notAdminCheck();
  }, []);

  return <div>プロフィールページ</div>;
});
