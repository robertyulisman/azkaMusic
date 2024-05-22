import React from 'react';
import { Button, Text, View } from 'react-native';

type Props = {};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="test" onPress={() => navigation.navigate('TracksList')} />
    </View>
  );
};

export default WelcomeScreen;
