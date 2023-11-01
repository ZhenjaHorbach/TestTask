import React from 'react';
import * as Redux from 'react-redux';

import {AppDispatch} from '../..';
import {clearUser} from '../slice';

export const useClearUser = () => {
  const dispatch = Redux.useDispatch<AppDispatch>();

  return React.useCallback(() => {
    dispatch(clearUser());
  }, [dispatch]);
};
