'use client';

import { useEffect, useState } from 'react';
import { getUserInfo, removeUser } from '@/services/actions/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteCookies } from '@/services/actions/deleteCookies';
import { authKey } from '@/constant/authkey';
import { logoutUser } from '@/services/actions/logoutUser';



const AuthButton = () => {
  const userInfo = getUserInfo()
  const router = useRouter();


  const handleLogout = () => {
    logoutUser(router)
  };

 

  return (
    <>
      {userInfo?.userId ? (
        <Button onClick={handleLogout} color="error">
          Log Out
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
