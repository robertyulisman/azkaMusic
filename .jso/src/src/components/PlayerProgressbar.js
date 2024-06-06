  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PlayerProgressBar = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[4]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PlayerProgressBar = exports.PlayerProgressBar = function PlayerProgressBar(_ref) {
    var style = _ref.style;
    var _useProgress = (0, _reactNativeTrackPlayer.useProgress)(250),
      duration = _useProgress.duration,
      position = _useProgress.position;
    var isSliding = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(false);
    var progress = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(0);
    var min = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(0);
    var max = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(1);
    var trackElapsedTime = (0, _$$_REQUIRE(_dependencyMap[6]).formatSecondsToMinutes)(position);
    var trackRemainingTime = (0, _$$_REQUIRE(_dependencyMap[6]).formatSecondsToMinutes)(duration - position);
    if (!isSliding.value) {
      progress.value = duration > 0 ? position / duration : 0;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[7]).Slider, {
        progress: progress,
        minimumValue: min,
        maximumValue: max,
        containerStyle: _$$_REQUIRE(_dependencyMap[8]).utilsStyles.slider,
        thumbWidth: 0,
        renderBubble: function renderBubble() {
          return null;
        },
        theme: {
          minimumTrackTintColor: _$$_REQUIRE(_dependencyMap[9]).colors.minimumTrackTintColor,
          maximumTrackTintColor: _$$_REQUIRE(_dependencyMap[9]).colors.maximumTrackTintColor
        },
        onSlidingStart: function onSlidingStart() {
          return isSliding.value = true;
        },
        onValueChange: ( /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2.default)(function* (value) {
            yield _reactNativeTrackPlayer.default.seekTo(value * duration);
          });
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }()),
        onSlidingComplete: ( /*#__PURE__*/function () {
          var _ref3 = (0, _asyncToGenerator2.default)(function* (value) {
            // if the user is not sliding, we should not update the position
            if (!isSliding.value) return;
            isSliding.value = false;
            yield _reactNativeTrackPlayer.default.seekTo(value * duration);
          });
          return function (_x2) {
            return _ref3.apply(this, arguments);
          };
        }())
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.timeRow,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.timeText,
          children: trackElapsedTime
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
          style: styles.timeText,
          children: ['-', " ", trackRemainingTime]
        })]
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    timeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 20
    },
    timeText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[8]).defaultStyles.text), {}, {
      color: _$$_REQUIRE(_dependencyMap[9]).colors.text,
      opacity: 0.75,
      fontSize: _$$_REQUIRE(_dependencyMap[9]).fontSize.xs,
      letterSpacing: 0.7,
      // fontWeight: '500',
      fontFamily: 'Manrope-Regular'
    })
  });
