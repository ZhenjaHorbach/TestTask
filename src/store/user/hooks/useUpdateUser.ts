import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../..';
import {updateUser} from '../slice';
import {InitialState} from '../types';

export const useUpdateUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(
    (payload: InitialState) => {
      dispatch(updateUser(payload));
    },
    [dispatch],
  );
};
