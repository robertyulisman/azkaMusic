  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _reactNativeFastImage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _MovingText = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[4]);
  var FloatingPlayer = function FloatingPlayer(_ref) {
    var _displayedTrack$title;
    var style = _ref.style;
    // const router = useRouter()

    var activeTrack = (0, _$$_REQUIRE(_dependencyMap[5]).useActiveTrack)();
    var lastActiveTrack = (0, _$$_REQUIRE(_dependencyMap[6]).useLastActiveTrack)();
    var displayedTrack = activeTrack != null ? activeTrack : lastActiveTrack;
    var handlePress = function handlePress() {
      // router.navigate('/player')
    };
    if (!displayedTrack) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      onPress: handlePress,
      activeOpacity: 0.9,
      style: [styles.container, style],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeFastImage.default, {
          source: {
            uri: displayedTrack.artwork
          },
          style: styles.trackArtworkImage
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.trackTitleContainer,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MovingText.default, {
            style: styles.trackTitle,
            text: (_displayedTrack$title = displayedTrack.title) != null ? _displayedTrack$title : '',
            animationThreshold: 25
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: styles.trackControlsContainer,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[7]).PlayPauseButton, {
            iconSize: 24
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[7]).SkipToNextButton, {
            iconSize: 22
          })]
        })]
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#252525',
      padding: 8,
      borderRadius: 12,
      paddingVertical: 10
    },
    trackArtworkImage: {
      width: 40,
      height: 40,
      borderRadius: 8
    },
    trackTitleContainer: {
      flex: 1,
      overflow: 'hidden',
      marginLeft: 10
    },
    trackTitle: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[8]).defaultStyles.text), {}, {
      fontSize: 18,
      fontWeight: '600',
      paddingLeft: 10
    }),
    trackControlsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 20,
      marginRight: 16,
      paddingLeft: 16
    }
  });
  var _default = exports.default = FloatingPlayer;
  _$$_REQUIRE(_dependencyMap[9]).NativeWindStyleSheet.create({
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
      },
      "flex": {
        "display": "flex"
      },
      "hidden": {
        "display": "none"
      }
    },
    atRules: {
      "container": [[["media", "(min-width: 640px)"]], [["media", "(min-width: 768px)"]], [["media", "(min-width: 1024px)"]], [["media", "(min-width: 1280px)"]], [["media", "(min-width: 1536px)"]]]
    },
    topics: {
      "container": ["width"]
    }
  });
