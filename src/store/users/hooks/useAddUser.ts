import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../..';
import {addUser} from '../slice';
import {User} from '../types';

export const useAddUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: User) => {
      dispatch(addUser(payload));
    },
    [dispatch],
  );
};
