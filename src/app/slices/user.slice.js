import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  name: '',
  pic: '',
  working: false,
  authentication: null
};

const setData = createAsyncThunk('user/setData', async payload => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return payload;
});

const getData = createAsyncThunk('user/getData', async payload => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return window.localStorage.getItem('user');
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
      })
      .addCase(getData.pending, state => {
        state.working = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.authentication = action.payload;
      });
  }
});

userSlice.actions.setData = setData;

export default userSlice;
