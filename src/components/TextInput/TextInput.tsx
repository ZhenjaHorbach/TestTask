import React, {FC, useState} from 'react';
import {View, TextInput as Input, Text, TextStyle} from 'react-native';
import {Button} from '../Button';
import {ErrorMessage} from '../ErrorMessage';
import {styles} from './styles';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  isSecureInput?: boolean;
  errorMessage?: string;
  disableErrorMessage?: boolean;
  style?: TextStyle;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  onBlur = () => {},
  errorMessage,
  disableErrorMessage,
  isSecureInput,
  style,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{label}:</Text>
      {isSecureInput && (
        <View style={styles.secureContainer}>
          <Input
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={!showPassword}
            placeholder={label}
            style={[styles.input, styles.secureInput, style]}
          />
          <Button
            title={showPassword ? 'Hide' : 'Show'}
            onPress={() => setShowPassword(!showPassword)}
            style={styles.showButton}
          />
        </View>
      )}
      {!isSecureInput && (
        <Input
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={label}
          style={[styles.input, style]}
        />
      )}
      <ErrorMessage
        errorMessage={errorMessage}
        disableErrorMessage={disableErrorMessage}
      />
    </View>
  );
};
