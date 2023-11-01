import {createSlice} from '@reduxjs/toolkit';

import {Users} from '../storeNames';

import {InitialState} from './types';

const initialState = [] as InitialState;

const usersSlice = createSlice({
  name: Users,
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addUser} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
