import { configureStore } from '@reduxjs/toolkit';
import { modalSlice, userSlice } from './slices';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer
  }
});
