  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _reactNativeTrackPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[7]);
  var _excluded = ["tracks", "style"];
  var QueueControls = function QueueControls(_ref) {
    var tracks = _ref.tracks,
      style = _ref.style,
      viewProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var handlePlay = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        yield _reactNativeTrackPlayer.default.setQueue(tracks);
        yield _reactNativeTrackPlayer.default.play();
      });
      return function handlePlay() {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleShufflePlay = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)(function* () {
        var shuffledTracks = (0, _toConsumableArray2.default)(tracks).sort(function () {
          return Math.random() - 0.5;
        });
        yield _reactNativeTrackPlayer.default.setQueue(shuffledTracks);
        yield _reactNativeTrackPlayer.default.play();
      });
      return function handleShufflePlay() {
        return _ref3.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, Object.assign(Object.assign({
      style: [{
        flexDirection: 'row',
        columnGap: 16
      }, style]
    }, viewProps), {}, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_$$_REQUIRE(_dependencyMap[8]).TouchableOpacity, {
          onPress: handlePlay,
          activeOpacity: 0.8,
          style: styles.button,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "play",
            size: 22,
            color: _$$_REQUIRE(_dependencyMap[9]).colors.primary
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Play"
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_$$_REQUIRE(_dependencyMap[8]).TouchableOpacity, {
          onPress: handleShufflePlay,
          activeOpacity: 0.8,
          style: styles.button,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: 'shuffle-sharp',
            size: 24,
            color: _$$_REQUIRE(_dependencyMap[9]).colors.primary
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Shuffle"
          })]
        })
      })]
    }));
  };
  var styles = _reactNative.StyleSheet.create({
    button: {
      padding: 12,
      backgroundColor: 'rgba(47, 47, 47, 0.5)',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 8
    },
    buttonText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[10]).defaultStyles.text), {}, {
      color: _$$_REQUIRE(_dependencyMap[9]).colors.primary,
      fontWeight: '600',
      fontSize: 18,
      textAlign: 'center'
    })
  });
  var _default = exports.default = QueueControls;
  _$$_REQUIRE(_dependencyMap[11]).NativeWindStyleSheet.create({
    styles: {
      "flex": {
        "display": "flex"
      }
    }
  });
