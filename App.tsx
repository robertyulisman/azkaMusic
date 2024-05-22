import { NavigationContainer } from '@react-navigation/native';
import { playbackService } from '@src/constants/playbackService';
import { useLogTrackPlayerState } from '@src/hooks/useLogTrackPlayerState';
import { useSetupTrackPlayer } from '@src/hooks/useSetupTrackPlayer';
import Router from '@src/router/Router';
// import Router from '@router/Router';
import { SafeAreaView } from 'moti';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import TrackPlayer from 'react-native-track-player';

type Props = {};
TrackPlayer.registerPlaybackService(() => playbackService);

const App = (props: Props) => {
  useSetupTrackPlayer({
    onLoad: () => console.log('track loaded'),
  });

  useLogTrackPlayerState();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide({ fade: true });
          }}
        >
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
