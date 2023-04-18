import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import UserPasswordTypes from '../../types/UserPasswordTypes';

interface UserPasswordState {
  items: UserPasswordTypes[];
}

const initialState: UserPasswordState = {
  items: []
};

const UserPasswordSlice = createSlice({
  initialState,
  name: 'userPassword',
  reducers: {
    addUserPassword: (state, action: PayloadAction<UserPasswordTypes>) => {
      state.items.push(action.payload);
    }
  }
});

export const { addUserPassword } = UserPasswordSlice.actions;
export default UserPasswordSlice.reducer;
