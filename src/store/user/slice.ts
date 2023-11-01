import {createSlice} from '@reduxjs/toolkit';

import {User} from '../storeNames';

import {InitialState} from './types';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  repeatPassword: '',
  dateOfBirth: '',
  agreeTerms: '',
  agreePromo: '',
} as InitialState;

const userSlice = createSlice({
  name: User,
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {...state, ...action.payload};
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const {updateUser, clearUser} = userSlice.actions;
export const userReducer = userSlice.reducer;
