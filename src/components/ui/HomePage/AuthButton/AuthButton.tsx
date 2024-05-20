'use client';

import { useEffect, useState } from 'react';
import { getUserInfo, removeUser } from '@/services/actions/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface UserInfo {
  userId: string;
  // Add other properties here if needed
}

const AuthButton = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();

  useEffect(() => {
    const info = getUserInfo();
    setUserInfo(info);
  }, []);

  const handleLogout = () => {
    removeUser();
    setUserInfo(null);
    router.refresh();
  };

  if (userInfo === null) {
    return null; // Or a loading spinner
  }

  return (
    <>
      {userInfo.userId ? (
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
