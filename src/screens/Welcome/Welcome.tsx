import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../ui';
import {Button} from '../../components/Button';
import {styles} from './styles';
import {useWelcome} from './useWelcome';

export const Welcome = () => {
  const {onLoginPress, onRegisterPress} = useWelcome();

  return (
    <ImageBackground style={styles.container} source={images.ocean}>
      <View style={styles.content}>
        <Button
          title="Login"
          onPress={onLoginPress}
          style={[styles.topButton, styles.button]}
        />
        <Button
          title="Register"
          onPress={onRegisterPress}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};
