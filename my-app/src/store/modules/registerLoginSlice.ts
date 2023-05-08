import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import RegisterLoginTypes from '../../types/RegisterLoginTypes';
import { RootState } from '..';

const adapter = createEntityAdapter<RegisterLoginTypes>({
  selectId: item => item.userMessage
});

export const { selectAll, selectById, selectTotal } = adapter.getSelectors((state: RootState) => state.registerLogin);

const registerLoginSlice = createSlice({
  name: 'registerLogin',
  initialState: adapter.getInitialState(),
  reducers: {
    addLogin: adapter.addOne
  }
});

export const { addLogin } = registerLoginSlice.actions;
export default registerLoginSlice.reducer;
