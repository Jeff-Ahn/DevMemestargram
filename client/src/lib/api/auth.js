import apiClient from './apiClient';

const authApi = {
  verifyToken: async accessToken => {
    const res = await apiClient.post('accounts/token/verify/', {
      token: accessToken,
    });

    return res;
  },
  refreshToken: async token => {
    const res = await apiClient.post('accounts/token/refresh/', {
      refresh: token,
    });

    return res;
  },
  getToken: async ({ code }) => {
    const githubBaseUrl = '/accounts/github/callback/';
    const res = await apiClient.post(githubBaseUrl, {
      provider: 'GITHUB',
      code: code || '',
    });
    if (res.status !== 200) throw res;
    const { access_token: accessToken, refresh_token: refreshToken } = res.data;

    return { accessToken, refreshToken };
  },
};

export default authApi;
