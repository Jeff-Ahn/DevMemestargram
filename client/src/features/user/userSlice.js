/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    isLogin: false,
  },
  reducers: {
    setUser: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      state.isLogin = true;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
