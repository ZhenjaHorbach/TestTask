import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {styles} from './styles';
import {colors} from '../../ui';

interface ButtonProps extends PressableProps {
  title: string;
  textStyle?: TextStyle;
  style?: ViewStyle | ViewStyle[];
}

export const Button: FC<ButtonProps> = ({
  title,
  textStyle,
  style: pressableStyle,
  ...pressableProps
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.pressable,
        {
          backgroundColor: pressed ? colors.mauve : colors.majorelle,
          opacity: pressed ? 0.8 : 1,
        },
        pressableProps.disabled && {opacity: 0.2},
        pressableStyle,
      ]}
      {...pressableProps}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};
