import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterSlice';
import messageReducer from './modules/messageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messageReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
