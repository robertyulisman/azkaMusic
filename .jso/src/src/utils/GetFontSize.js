  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var fontScale = _reactNative.PixelRatio.getFontScale();
  var getFontSize = function getFontSize(size) {
    if (_reactNative.Platform.OS === 'android') {
      return size / fontScale;
    }
    if (_reactNative.Platform.OS === 'ios') {
      return (size + 2) / fontScale;
    }
  };
  var _default = exports.default = getFontSize;
