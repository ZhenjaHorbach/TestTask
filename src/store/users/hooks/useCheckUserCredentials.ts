import React from 'react';
import {useSelector} from 'react-redux';
import {User} from '../types';
import type {RootState} from '../..';
import type {InitialState} from '../types';

export const useCheckUserCredentials = () => {
  const users = useSelector<RootState, InitialState>(state => state.users);
  return React.useCallback(
    (payload: User) => {
      const {email, password} = payload;
      return users.find(
        user => user.email === email && user.password === password,
      );
    },
    [users],
  );
};
