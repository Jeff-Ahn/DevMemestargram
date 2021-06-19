import { useQuery } from 'react-query';
import userApi from '../lib/api/user';

function useProfile(id) {
  const getUserProfileById = () => userApi.getUserProfileById(id);
  const { data, isLoading, isSuccess, isError } = useQuery(
    'GET_USER_PROFILE',
    getUserProfileById,
  );
  const userProfile = data;
  return [userProfile, isLoading, isSuccess, isError];
}

export default useProfile;
