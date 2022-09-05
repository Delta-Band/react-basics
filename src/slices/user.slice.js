import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  name: '',
  pic: '',
  working: false,
  auth: JSON.parse(window.localStorage.getItem('auth')) || null
};

const setData = createAsyncThunk('user/setData', async payload => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  window.localStorage.setItem('user', JSON.stringify(payload));
  return payload;
});

const auth = createAsyncThunk('user/auth', async () => {
  return JSON.parse(window.localStorage.getItem('auth'));
});

const login = createAsyncThunk('user/login', async payload => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  window.localStorage.setItem(
    'auth',
    JSON.stringify({
      email: payload.email,
      pass: payload.pass
    })
  );
  return payload;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state, action) {
      window.localStorage.removeItem('auth');
      state.auth = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(setData.pending, state => {
        state.working = 'Saving';
      })
      .addCase(setData.fulfilled, (state, action) => {
        state = Object.assign(state, action.payload, { working: false });
      })
      .addCase(auth.pending, state => {
        state.working = 'Authenticating';
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.working = false;
      })
      .addCase(login.pending, state => {
        state.working = 'Loging in';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.auth = action.payload;
        state.working = false;
      });
  }
});

Object.assign(userSlice.actions, {
  setData,
  auth,
  login
});

export default userSlice;
