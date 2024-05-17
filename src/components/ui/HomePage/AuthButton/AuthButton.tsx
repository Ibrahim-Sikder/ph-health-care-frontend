import { getUserInfo, removeUser } from '@/services/actions/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter()
    const handleLogout = () => {
      removeUser();
      router.refresh()
    };
    return (
        <>
           {userInfo?.userId ? (
            <Button
              onClick={handleLogout}
              color="error"
            >
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