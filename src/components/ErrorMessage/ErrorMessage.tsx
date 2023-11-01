import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

interface ScreenWrapperProps {
  errorMessage?: string;
  disableErrorMessage?: boolean;
}

export const ErrorMessage = ({
  errorMessage,
  disableErrorMessage,
}: ScreenWrapperProps) => {
  return (
    <>
      {!disableErrorMessage && (
        <View style={styles.container}>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
      )}
    </>
  );
};
