import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setFiltered } from './contactsSlice';

const BASE = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = BASE;

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
