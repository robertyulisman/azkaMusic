  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useLogTrackPlayerState = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var events = [_$$_REQUIRE(_dependencyMap[2]).Event.PlaybackState, _$$_REQUIRE(_dependencyMap[2]).Event.PlaybackError, _$$_REQUIRE(_dependencyMap[2]).Event.PlaybackActiveTrackChanged];
  var useLogTrackPlayerState = exports.useLogTrackPlayerState = function useLogTrackPlayerState() {
    (0, _$$_REQUIRE(_dependencyMap[2]).useTrackPlayerEvents)(events, /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)(function* (event) {
        if (event.type === _$$_REQUIRE(_dependencyMap[2]).Event.PlaybackError) {}
        if (event.type === _$$_REQUIRE(_dependencyMap[2]).Event.PlaybackState) {}
        if (event.type === _$$_REQUIRE(_dependencyMap[2]).Event.PlaybackActiveTrackChanged) {}
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  };
