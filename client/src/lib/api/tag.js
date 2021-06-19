import apiClient from './apiClient';

const tagApi = {
  getTagNameById: async id => {
    const res = await apiClient.get(`/tag/${id}/`);

    if (res.status !== 200) throw res;

    return res.data;
  },
  createNewTag: async tagName => {
    const res = await apiClient.post(
      `/tag/`,
      {
        tag_name: tagName,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );

    if (res.status !== 201) throw res;

    return res;
  },
};

export default tagApi;
