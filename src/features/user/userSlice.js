import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { updateUsername } = userSlice.actions;

export const getUsername = (state) => state.user.username;

export default userSlice.reducer;
