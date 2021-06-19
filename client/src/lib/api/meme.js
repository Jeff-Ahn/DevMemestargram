import apiClient from './apiClient';

const memeApi = {
  getAllMemes: async () => {
    const res = await apiClient.get('/meme/');

    if (res.status !== 200) throw res;

    return res.data;
  },
  getMemeById: async id => {
    const res = await apiClient.get(`/meme/${id}`);

    if (res.status !== 200) throw res;

    return res.data;
  },
};

export default memeApi;
