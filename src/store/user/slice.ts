import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {InitialState} from './types';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  getPromotionalMaterial: false,
} as InitialState;

const userSlice = createSlice({
  name: User,
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
