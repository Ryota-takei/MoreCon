import React, { memo, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCurrentUserInformation, selectUser } from '../../features/user/userSlice';


import { UseAdminCheck } from '../../hooks/auth/UseAdminCheck';

export const PostsPage:React.VFC = memo(() => {
  const {notAdminCheck} = UseAdminCheck()
  const dispatch = useAppDispatch()
  const userInformation = useAppSelector(selectUser)

  console.log(userInformation)

  useEffect(() => {
  notAdminCheck()
  dispatch(getCurrentUserInformation())
  }, []);

  return (
    <div>
      投稿一覧
    </div>
  )
})
