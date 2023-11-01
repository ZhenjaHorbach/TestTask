import React from 'react';
import {Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from './styles';
import {colors} from '../../ui';
import {ErrorMessage} from '../ErrorMessage';

interface CheckboxProps {
  onPress: (value: boolean) => void;
  errorMessage?: string;
  disableErrorMessage?: boolean;
  checkboxText?: string;
}

export const Checkbox = ({
  onPress,
  errorMessage,
  disableErrorMessage,
  checkboxText = '',
}: CheckboxProps) => {
  return (
    <>
      <BouncyCheckbox
        size={25}
        textComponent={
          <Text style={styles.bouncyCheckboxText}>{checkboxText}</Text>
        }
        fillColor={colors.mauve}
        onPress={onPress}
      />
      <ErrorMessage
        errorMessage={errorMessage}
        disableErrorMessage={disableErrorMessage}
      />
    </>
  );
};
