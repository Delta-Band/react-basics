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

const auth = createAsyncThunk('user/auth', async payload => {
  return window.localStorage.getItem('auth');
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
      .addCase(auth.pending, state => {
        state.working = true;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.authentication = action.payload;
        state.false = true;
      });
  }
});

userSlice.actions.setData = setData;

export default userSlice;
