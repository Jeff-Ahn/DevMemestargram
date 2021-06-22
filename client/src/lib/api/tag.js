import apiClient from './apiClient';

const tagApi = {
  getTagNameById: async id => {
    const res = await apiClient.get(`/api/tag/${id}/`);

    if (res.status !== 200) throw res;

    return res.data;
  },
  createNewTag: async tagName => {
    const res = await apiClient.post(
      '/api/tag/',
      {
        tag_name: tagName,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        'Content-Type': 'multipart/form-data',
      },
    );

    if (res.status !== 201) throw res;

    return res;
  },
  getTagByTagName: async tagName => {
    const res = await apiClient.get(`/api/tag/${tagName}/get_tag/`);

    if (res.status !== 200) throw res;

    return res.data;
  },
};

export default tagApi;
