import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MessageType from '../../types/MessageType';

interface MessageState {
  items: MessageType[];
}

const initialState: MessageState = {
  items: []
};

const messageSlice = createSlice({
  initialState,
  name: 'message',
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      state.items.push(action.payload);
    },
    renoveMessage: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    }
  }
});

export const { addMessage, renoveMessage } = messageSlice.actions;
export default messageSlice.reducer;
