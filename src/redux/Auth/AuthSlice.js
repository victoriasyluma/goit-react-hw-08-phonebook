import { createSlice } from '@reduxjs/toolkit';
import {
  registrationThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from './AuthOperation';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registrationThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registrationThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logoutThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [refreshThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
