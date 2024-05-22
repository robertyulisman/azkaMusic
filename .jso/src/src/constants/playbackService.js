  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.playbackService = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var playbackService = exports.playbackService = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)(function* () {
      _reactNativeTrackPlayer.default.addEventListener(_reactNativeTrackPlayer.Event.RemotePlay, function () {
        _reactNativeTrackPlayer.default.play();
      });
      _reactNativeTrackPlayer.default.addEventListener(_reactNativeTrackPlayer.Event.RemotePause, function () {
        _reactNativeTrackPlayer.default.pause();
      });
      _reactNativeTrackPlayer.default.addEventListener(_reactNativeTrackPlayer.Event.RemoteStop, function () {
        _reactNativeTrackPlayer.default.stop();
      });
      _reactNativeTrackPlayer.default.addEventListener(_reactNativeTrackPlayer.Event.RemoteNext, function () {
        _reactNativeTrackPlayer.default.skipToNext();
      });
      _reactNativeTrackPlayer.default.addEventListener(_reactNativeTrackPlayer.Event.RemotePrevious, function () {
        _reactNativeTrackPlayer.default.skipToPrevious();
      });
    });
    return function playbackService() {
      return _ref.apply(this, arguments);
    };
  }();
