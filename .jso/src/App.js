  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _Router = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNativeBootsplash = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  _$$_REQUIRE(_dependencyMap[4]);
  var _reactNativeTrackPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[6]);
  // import Router from '@router/Router';

  _reactNativeTrackPlayer.default.registerPlaybackService(function () {
    return _$$_REQUIRE(_dependencyMap[7]).playbackService;
  });
  var App = function App(props) {
    (0, _$$_REQUIRE(_dependencyMap[8]).useSetupTrackPlayer)({
      onLoad: function onLoad() {
        return undefined;
      }
    });
    (0, _$$_REQUIRE(_dependencyMap[9]).useLogTrackPlayerState)();
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[10]).GestureHandlerRootView, {
      style: {
        flex: 1
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[11]).SafeAreaView, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[12]).NavigationContainer, {
          onReady: function onReady() {
            _reactNativeBootsplash.default.hide({
              fade: true
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Router.default, {})
        })
      })
    });
  };
  var _default = exports.default = App;
  _$$_REQUIRE(_dependencyMap[13]).NativeWindStyleSheet.create({
    styles: {
      "flex": {
        "display": "flex"
      }
    }
  });
