  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useTrackPlayerVolume = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _react = _$$_REQUIRE(_dependencyMap[3]);
  var _reactNativeTrackPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var useTrackPlayerVolume = exports.useTrackPlayerVolume = function useTrackPlayerVolume() {
    var _useState = (0, _react.useState)(undefined),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      volume = _useState2[0],
      setVolume = _useState2[1];
    var getVolume = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
      var currentVolume = yield _reactNativeTrackPlayer.default.getVolume();
      setVolume(currentVolume);
    }), []);
    var updateVolume = (0, _react.useCallback)( /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (newVolume) {
        if (newVolume < 0 || newVolume > 1) return;
        setVolume(newVolume);
        yield _reactNativeTrackPlayer.default.setVolume(newVolume);
      });
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), []);
    (0, _react.useEffect)(function () {
      getVolume();
    }, [getVolume]);
    return {
      volume: volume,
      updateVolume: updateVolume
    };
  };
