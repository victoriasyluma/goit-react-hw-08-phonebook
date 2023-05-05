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
  isRefreshing: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    /**
     * Registration
     */
    [registrationThunk.fulfilled]: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;

      state.isLoggedIn = true;
    },

    [registrationThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /**
     * Login
     */
    [loginThunk.fulfilled]: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;

      state.isLoggedIn = true;
    },

    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /**
     * Logout
     */
    [logoutThunk.fulfilled]: (state, action) => {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [logoutThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },

    /**
     * Refresh token from persisted
     */
    [refreshThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [refreshThunk.rejected]: (state, action) => {
      state.error = action.payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
