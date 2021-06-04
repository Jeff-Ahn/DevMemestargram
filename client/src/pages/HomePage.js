import React, { useEffect, useCallback } from 'react';
import { useMutation } from 'react-query';
import GlobalLayout from '../components/GlobalLayout';
import authApi from '../lib/api/auth';
import userApi from '../lib/api/user';
import useUser from '../hooks/useUser';

function HomePage() {
  const [user, setUserData] = useUser();

  const { mutate } = useMutation(authApi.verifyToken, {
    onSuccess: async () => {
      const { email } = await userApi.get();
      setUserData({ email });
    },
    onError: error => {
      console.error(error);
    },
  });

  const checkUserIsLogin = useCallback(
    token => {
      mutate(token);
    },
    [mutate],
  );

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken') || null;
    checkUserIsLogin(accessToken);
  }, [checkUserIsLogin]);

  return (
    <GlobalLayout>
      {user.isLogin ? <p>hello {user.email}</p> : <p>hello annoymous user</p>}
    </GlobalLayout>
  );
}

export default HomePage;
