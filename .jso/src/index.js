  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _reactNativeCodePush = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _App = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  var MainScreen = function MainScreen() {
    _react.default.useEffect(function () {
      _reactNativeCodePush.default.sync({
        updateDialog: true,
        installMode: _reactNativeCodePush.default.InstallMode.IMMEDIATE
      });
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {});
  };
  var codePushOptions = {
    checkFrequency: _reactNativeCodePush.default.CheckFrequency.ON_APP_START,
    installMode: _reactNativeCodePush.default.InstallMode.IMMEDIATE
  };
  var pushMainScreen = (0, _reactNativeCodePush.default)(codePushOptions)(MainScreen);
  var _default = exports.default = pushMainScreen;
  _reactNative.AppRegistry.registerComponent(_$$_REQUIRE(_dependencyMap[6]).name, function () {
    return pushMainScreen;
  });
