import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setFiltered } from './contactsSlice';

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
      // console.log(credentials)
      const res = await axios.post('users/signup', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      return thunkAPI.rejectWithValue(error);
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const contact = { name, phone };

      const response = await axios.post('/contacts', contact);

      thunkAPI.dispatch(fetchContacts());
      thunkAPI.dispatch(setFiltered(''));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },

  {
    condition: ({ name }, thunkAPI) => {
      const { contactsState } = thunkAPI.getState();

      const {
        contacts: { items },
      } = contactsState;

      const names = new Set(items.map((contact) => contact.name.toLowerCase()));

      if (names.has(name.toLowerCase())) {
        alert(`${name} is already in contacts`);
        return false;
      }

      return true;
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);

      thunkAPI.dispatch(fetchContacts());
      thunkAPI.dispatch(setFiltered(''));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
