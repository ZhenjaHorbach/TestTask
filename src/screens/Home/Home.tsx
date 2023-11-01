import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {images} from '../../ui';
import {Button} from '../../components/Button';
import {styles} from './styles';
import {useHome} from './useHome';

export const Home = () => {
  const {onStartAgain, user} = useHome();

  return (
    <ImageBackground style={styles.container} source={images.ocean}>
      <View style={styles.content}>
        <Text>Hello {user.fullName}</Text>
        <Text>WELCOME TO HOME SCREEN</Text>
        <Button
          title="Start again"
          onPress={onStartAgain}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};
