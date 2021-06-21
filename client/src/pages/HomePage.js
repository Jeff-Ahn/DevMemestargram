/* eslint-disable no-unused-vars */
import React, { useEffect, useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import GlobalLayout from '../components/GlobalLayout';
import Memes from '../components/Memes';
import Nav from '../components/Nav';
import useUser from '../hooks/useUser';
import useLoader from '../hooks/useLoader';
import authApi from '../lib/api/auth';
import memeApi from '../lib/api/meme';
import userApi from '../lib/api/user';
import * as S from './styles';

function HomePage() {
  const [user, setUserData] = useUser();
  const [Loader, visible] = useLoader(true);
  const { isLoading, data, isStale } = useQuery('memes', memeApi.getAllMemes);

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
    memeApi.getAllMemes();
    const accessToken = localStorage.getItem('accessToken') || null;
    checkUserIsLogin(accessToken);
  }, [checkUserIsLogin]);

  return (
    <GlobalLayout>
      <S.HomeLayout>
        {isLoading && <Loader visible={visible} />}
        {isStale && (
          <Nav>
            <Memes memes={data} />
          </Nav>
        )}
      </S.HomeLayout>
    </GlobalLayout>
  );
}

export default HomePage;
