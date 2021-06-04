/* eslint-disable no-unused-vars */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../features/user/userSlice';

function useUser() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const setUserData = useCallback(data => dispatch(setUser(data)), [dispatch]);
  return [user, setUserData];
}

export default useUser;
