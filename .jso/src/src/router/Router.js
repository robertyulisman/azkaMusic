  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Router;
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[0]);
  // import { TracksList, WelcomeScreen } from '@/screens';

  // import { TracksList, WelcomeScreen } from '../screens/index';
  var Stack = (0, _$$_REQUIRE(_dependencyMap[1]).createNativeStackNavigator)();
  function Router() {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Stack.Navigator, {
      initialRouteName: "TracksList",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
        name: "WelcomeScreen",
        options: {
          headerShown: false
        },
        component: _$$_REQUIRE(_dependencyMap[2]).WelcomeScreen
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
        name: "TracksList",
        options: {
          headerShown: false
        },
        component: _$$_REQUIRE(_dependencyMap[2]).TracksList
      })]
    });
  }
