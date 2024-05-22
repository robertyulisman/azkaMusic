// import { TracksList, WelcomeScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TracksList, WelcomeScreen } from '@src/screens';
// import { TracksList, WelcomeScreen } from '../screens/index';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="TracksList">
      <Stack.Screen
        name="WelcomeScreen"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen name="TracksList" options={{ headerShown: false }} component={TracksList} />
    </Stack.Navigator>
  );
}
