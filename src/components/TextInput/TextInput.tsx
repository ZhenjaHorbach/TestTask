import React, {FC} from 'react';
import {View, TextInput as Input, Text, TextStyle} from 'react-native';
import {styles} from './styles';

interface TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  style?: TextStyle;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChangeText,
  onBlur = () => {},
  secureTextEntry = false,
  style,
}) => {
  return (
    <View>
      <Text>{label}:</Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        placeholder={label}
        style={[styles.input, style]}
      />
    </View>
  );
};
