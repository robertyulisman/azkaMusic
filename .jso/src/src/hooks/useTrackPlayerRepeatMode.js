  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useTrackPlayerRepeatMode = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _$$_REQUIRE(_dependencyMap[3]);
  var _reactNativeTrackPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var useTrackPlayerRepeatMode = exports.useTrackPlayerRepeatMode = function useTrackPlayerRepeatMode() {
    var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      repeatMode = _useState2[0],
      setRepeatMode = _useState2[1];
    var changeRepeatMode = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (repeatMode) {
        yield _reactNativeTrackPlayer.default.setRepeatMode(repeatMode);
        setRepeatMode(repeatMode);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(), []);
    (0, _react.useEffect)(function () {
      _reactNativeTrackPlayer.default.getRepeatMode().then(setRepeatMode);
    }, []);
    return {
      repeatMode: repeatMode,
      changeRepeatMode: changeRepeatMode
    };
  };
