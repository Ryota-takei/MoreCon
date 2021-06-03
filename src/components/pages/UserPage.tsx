import React, { memo, useEffect } from "react";

import { UseAdminCheck } from "../../hooks/auth/UseAdminCheck";

export const UserPage: React.VFC = memo(() => {
  const { notAdminCheck } = UseAdminCheck();

  useEffect(() => {
    notAdminCheck();
  }, []);

  return <div>userPage</div>;
});
