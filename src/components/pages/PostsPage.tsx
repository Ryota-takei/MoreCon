import React, { memo, useEffect } from 'react'
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';

import { UseAdminCheck } from '../../hooks/auth/UseAdminCheck';

export const PostsPage:React.VFC = memo(() => {
  const {notAdminCheck} = UseAdminCheck()
  const userInformation = useAppSelector(selectUser)

  console.log(userInformation)

  useEffect(() => {
    notAdminCheck()
  }, []);

  return (
    <div>
      投稿一覧
    </div>
  )
})
