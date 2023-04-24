import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import MessageType from '../../types/MessageType';
import { RootState } from '..';

const adapter = createEntityAdapter<MessageType>({
  selectId: item => item.id
});

export const { selectAll, selectById, selectTotal } = adapter.getSelectors((state: RootState) => state.message);

const messageSlice = createSlice({
  name: 'message',
  initialState: adapter.getInitialState(),
  reducers: {
    addMessage: adapter.addOne,
    removeMessage: adapter.removeOne,
    updateMessage: adapter.updateOne
  }
});

export const { addMessage, removeMessage, updateMessage } = messageSlice.actions;
export default messageSlice.reducer;
