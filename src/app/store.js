import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import notifReducer from '../slices/notifSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    notification: notifReducer,
  },
});