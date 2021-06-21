import { useQuery } from 'react-query';
import memeApi from '../lib/api/meme';

function useMeme(id) {
  const getMemeById = () => memeApi.getMemeById(id);
  const { data, isLoading, isSuccess, isError } = useQuery(
    'GET_MEME',
    getMemeById,
  );
  const meme = data;
  return [meme, isLoading, isSuccess, isError];
}

export default useMeme;
