import { combineReducers } from '@reduxjs/toolkit';

import message from './messageSlice';
import counter from './counterSlice';
import registerLogin from './registerLoginSlice';
import checkLogin from './requestLoginSlice';

export default combineReducers({
  message,
  counter,
  registerLogin,
  checkLogin
});
