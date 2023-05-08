import { createSlice } from '@reduxjs/toolkit';
import RegisterLoginTypes from '../../types/RegisterLoginTypes';

const requestLoginSlice = createSlice({
  name: 'checkLogin',
  initialState: {} as RegisterLoginTypes,
  reducers: {
    login: (state, action) => {
      state.userMessage = action.payload.userMessage;
      state.passwordMessage = action.payload.passwordMessage;
    },
    logout: state => {
      state.userMessage = '';
      state.passwordMessage = '';
    }
  }
});

export const { login, logout } = requestLoginSlice.actions;
export default requestLoginSlice.reducer;
