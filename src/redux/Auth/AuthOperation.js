import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE = 'https://connections-api.herokuapp.com';

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = ``;
};

axios.defaults.baseURL = BASE;

export const registrationThunk = createAsyncThunk(
  '@@auth/registration',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/signup', credentials);

      setToken(res.data.token);
      return res.data;
    } catch (error) {
      const { message, code, response } = error;
      const serializableError = { message, code, response };
      return thunkAPI.rejectWithValue(serializableError);
    }
  }
);
export const loginThunk = createAsyncThunk(
  '@@auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/login', credentials);
      setToken(res.data.token);
      console.log(res);
      return res.data;
    } catch (error) {
      const { message, code, response } = error;
      const serializableError = { message, code, response };
      return thunkAPI.rejectWithValue(serializableError);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  '@@auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('users/logout');
      clearToken();
    } catch (error) {
      const { message, code, response } = error;
      const serializableError = { message, code, response };
      return thunkAPI.rejectWithValue(serializableError);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Token is not find');
    }

    try {
      setToken(savedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const BASE = 'https://connections-api.herokuapp.com';

// const setToken = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearToken = () => {
//   axios.defaults.headers.common.Authorization = ``;
// };

// axios.defaults.baseURL = BASE;

// export const registrationThunk = createAsyncThunk(
//   '@@auth/registration',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('users/signup', credentials);
//       setToken(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const loginThunk = createAsyncThunk(
//   '@@auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('users/login', credentials);
//       setToken(res.data.token);
//       console.log(res);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const logoutThunk = createAsyncThunk(
//   '@@auth/logout',
//   async (_, thunkAPI) => {
//     try {
//       await axios.post('users/logout');
//       clearToken();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const fetchCurrentUser = createAsyncThunk(
//   '@@auth/fetchCurrentUser',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
