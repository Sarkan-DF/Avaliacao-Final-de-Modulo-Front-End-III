import { combineReducers } from '@reduxjs/toolkit';

import message from './messageSlice';
import counter from './counterSlice';
import userPassword from './userPasswordSlice';

export default combineReducers({
  message,
  counter,
  userPassword
});
