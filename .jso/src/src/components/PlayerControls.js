  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SkipToPreviousButton = exports.SkipToNextButton = exports.PlayerControls = exports.PlayPauseButton = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _FontAwesome = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[4]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PlayerControls = exports.PlayerControls = function PlayerControls(_ref) {
    var style = _ref.style;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.container, style],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.row,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(SkipToPreviousButton, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(PlayPauseButton, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(SkipToNextButton, {})]
      })
    });
  };
  var PlayPauseButton = exports.PlayPauseButton = function PlayPauseButton(_ref2) {
    var style = _ref2.style,
      _ref2$iconSize = _ref2.iconSize,
      iconSize = _ref2$iconSize === undefined ? 36 : _ref2$iconSize;
    var _useIsPlaying = (0, _reactNativeTrackPlayer.useIsPlaying)(),
      playing = _useIsPlaying.playing;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [{
        height: iconSize
      }, style],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        activeOpacity: 0.85,
        onPress: playing ? _reactNativeTrackPlayer.default.pause : _reactNativeTrackPlayer.default.play,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
          name: playing ? 'pause' : 'play',
          size: iconSize,
          color: _$$_REQUIRE(_dependencyMap[5]).colors.text
        })
      })
    });
  };
  var SkipToNextButton = exports.SkipToNextButton = function SkipToNextButton(_ref3) {
    var _ref3$iconSize = _ref3.iconSize,
      iconSize = _ref3$iconSize === undefined ? 30 : _ref3$iconSize;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      activeOpacity: 0.7,
      onPress: function onPress() {
        return _reactNativeTrackPlayer.default.skipToNext();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
        name: "forward",
        size: iconSize,
        color: _$$_REQUIRE(_dependencyMap[5]).colors.text
      })
    });
  };
  var SkipToPreviousButton = exports.SkipToPreviousButton = function SkipToPreviousButton(_ref4) {
    var _ref4$iconSize = _ref4.iconSize,
      iconSize = _ref4$iconSize === undefined ? 30 : _ref4$iconSize;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      activeOpacity: 0.7,
      onPress: function onPress() {
        return _reactNativeTrackPlayer.default.skipToPrevious();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
        name: 'backward',
        size: iconSize,
        color: _$$_REQUIRE(_dependencyMap[5]).colors.text
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    container: {
      width: '100%'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  });
  _$$_REQUIRE(_dependencyMap[6]).NativeWindStyleSheet.create({
    styles: {
      "container": {
        "width": "100%"
      },
      "container@0": {
        "maxWidth": 640
      },
      "container@1": {
        "maxWidth": 768
      },
      "container@2": {
        "maxWidth": 1024
      },
      "container@3": {
        "maxWidth": 1280
      },
      "container@4": {
        "maxWidth": 1536
      }
    },
    atRules: {
      "container": [[["media", "(min-width: 640px)"]], [["media", "(min-width: 768px)"]], [["media", "(min-width: 1024px)"]], [["media", "(min-width: 1280px)"]], [["media", "(min-width: 1536px)"]]]
    },
    topics: {
      "container": ["width"]
    }
  });
