import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import GlobalLayout from '../components/GlobalLayout';
import useLoader from '../hooks/useLoader';
import authApi from '../lib/api/auth';

function Callback({ location, history }) {
  const [Loader, visible] = useLoader(true);

  const mutation = useMutation(authApi.getToken, {
    onSuccess: data => {
      const { accessToken, refreshToken } = data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    },
    onError: error => {
      console.error(error);
    },
    onSettled: () => {
      history.push('/');
    },
  });

  useEffect(() => {
    const code = new URLSearchParams(location.search.toString()).get('code');
    mutation.mutate({ code });
  }, [location, history]);

  return (
    <GlobalLayout>
      {mutation.isLoading && <Loader visible={visible} />}
    </GlobalLayout>
  );
}

export default Callback;
