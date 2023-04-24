import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MessageType from '../../types/MessageType';
// import { RootState } from '..';

// const adapter = createEntityAdapter<MessageType>({
//   selectId: item => item.nameMessage
// });

// export const { selectAll, selectById, selectTotal } = adapter.getSelectors((state: RootState) => state.message);

// const messageSlice = createSlice({
//   name: 'message',
//   initialState: adapter.getInitialState(),
//   reducers: {
//     addMessage: adapter.addOne,
//     removeMessage: adapter.removeOne,
//     updateMessage: adapter.updateOne
//   }
// });

// export const { addMessage, removeMessage, updateMessage } = messageSlice.actions;
// export default messageSlice.reducer;

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
