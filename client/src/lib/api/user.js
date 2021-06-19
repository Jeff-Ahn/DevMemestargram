import apiClient from './apiClient';

const userApi = {
  get: async () => {
    const res = await apiClient.get('/accounts/user/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    if (res.status !== 200) throw res;

    return res.data;
  },
  getUserProfileById: async id => {
    const res = await apiClient.get(`/accounts/${id}/`);

    if (res.status !== 200) throw res;

    return res.data;
  },
  logout: async () => {
    const res = await apiClient.post(
      '/accounts/logout/',
      {
        refresh: localStorage.getItem('refreshToken'),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );

    if (res.status !== 200) throw res;

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.replace('/');
    return res;
  },
};

export default userApi;
