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
};

export default userApi;
