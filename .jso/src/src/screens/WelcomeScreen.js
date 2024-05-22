  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[3]);
  var WelcomeScreen = function WelcomeScreen(_ref) {
    var navigation = _ref.navigation;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        children: "WelcomeScreen"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Button, {
        title: "test",
        onPress: function onPress() {
          return navigation.navigate('TracksList');
        }
      })]
    });
  };
  var _default = exports.default = WelcomeScreen;
