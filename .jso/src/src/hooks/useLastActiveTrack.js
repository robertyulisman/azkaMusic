  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useLastActiveTrack = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[2]);
  var useLastActiveTrack = exports.useLastActiveTrack = function useLastActiveTrack() {
    var activeTrack = (0, _$$_REQUIRE(_dependencyMap[3]).useActiveTrack)();
    var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      lastActiveTrack = _useState2[0],
      setLastActiveTrack = _useState2[1];
    (0, _react.useEffect)(function () {
      if (!activeTrack) return;
      setLastActiveTrack(activeTrack);
    }, [activeTrack]);
    return lastActiveTrack;
  };
