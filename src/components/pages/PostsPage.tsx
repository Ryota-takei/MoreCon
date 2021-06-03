import React, { memo, useEffect } from 'react'

import { UseAdminCheck } from '../../hooks/auth/UseAdminCheck';

export const PostsPage:React.VFC = memo(() => {
  const {notAdminCheck} = UseAdminCheck()

  useEffect(() => {
    notAdminCheck()
  }, []);

  return (
    <div>
      投稿一覧
    </div>
  )
})
