import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  name: '',
  pic: '',
  working: false
};

const setData = createAsyncThunk('user/setData', async payload => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return payload;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setData.pending, state => {
        state.working = true;
      })
      .addCase(setData.fulfilled, (state, action) => {
        state = Object.assign(state, action.payload, { working: false });
      });
  }
});

userSlice.actions.setData = setData;

export default userSlice;
