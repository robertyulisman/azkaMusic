import React from 'react';
import { AppRegistry } from 'react-native';
import codePush from 'react-native-code-push';
import App from './App';
import { name as appName } from './app.json';

const MainScreen = () => {
  React.useEffect(() => {
    codePush.sync({
      updateDialog: Platform.OS === 'android',
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  return <App />;
};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};

let pushMainScreen = codePush(codePushOptions)(MainScreen);

export default pushMainScreen;

AppRegistry.registerComponent(appName, () => pushMainScreen);
