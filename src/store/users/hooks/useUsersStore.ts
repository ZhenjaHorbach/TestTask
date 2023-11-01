import {useSelector} from 'react-redux';

import type {RootState} from '../..';
import type {InitialState} from '../types';

export const useUsersStore = () => {
  return useSelector<RootState, InitialState>(state => state.users);
};
