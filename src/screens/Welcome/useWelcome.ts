import React from 'react';
import {NavigationProp} from '../../navigation/types';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useClearUser} from '../../store/user/hooks';

export const useWelcome = () => {
  const navigation = useNavigation<NavigationProp<'Welcome'>>();

  const clearUser = useClearUser();

  const onLoginPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    navigation.navigate('Register');
  };

  useFocusEffect(
    React.useCallback(() => {
      clearUser();
    }, [clearUser]),
  );

  return {
    onLoginPress,
    onRegisterPress,
  };
};
