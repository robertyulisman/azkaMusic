  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useSetupTrackPlayer = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[2]);
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var setupPlayer = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)(function* () {
      yield _reactNativeTrackPlayer.default.setupPlayer({
        maxCacheSize: 10240
      });
      yield _reactNativeTrackPlayer.default.updateOptions({
        ratingType: _reactNativeTrackPlayer.RatingType.Heart,
        capabilities: [_reactNativeTrackPlayer.Capability.Play, _reactNativeTrackPlayer.Capability.Pause, _reactNativeTrackPlayer.Capability.SkipToNext, _reactNativeTrackPlayer.Capability.SkipToPrevious, _reactNativeTrackPlayer.Capability.Stop]
      });
      yield _reactNativeTrackPlayer.default.setVolume(0.3); // not too loud
      yield _reactNativeTrackPlayer.default.setRepeatMode(_reactNativeTrackPlayer.RepeatMode.Queue);
    });
    return function setupPlayer() {
      return _ref.apply(this, arguments);
    };
  }();
  var useSetupTrackPlayer = exports.useSetupTrackPlayer = function useSetupTrackPlayer(_ref2) {
    var onLoad = _ref2.onLoad;
    var isInitialized = (0, _react.useRef)(false);
    (0, _react.useEffect)(function () {
      if (isInitialized.current) return;
      setupPlayer().then(function () {
        isInitialized.current = true;
        onLoad == null ? undefined : onLoad();
      }).catch(function (error) {
        isInitialized.current = false;
      });
    }, [onLoad]);
  };
