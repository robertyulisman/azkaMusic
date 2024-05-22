  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _reactNativeFastImage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNativeLoaderKit = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _Entypo = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _TrackShortcutsMenu = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[8]);
  var TracksListItem = function TracksListItem(_ref) {
    var _useActiveTrack;
    var track = _ref.track,
      handleTrackSelect = _ref.onTrackSelect;
    var _useIsPlaying = (0, _$$_REQUIRE(_dependencyMap[9]).useIsPlaying)(),
      playing = _useIsPlaying.playing;
    var isActiveTrack = ((_useActiveTrack = (0, _$$_REQUIRE(_dependencyMap[9]).useActiveTrack)()) == null ? undefined : _useActiveTrack.url) === track.url;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableHighlight, {
      onPress: function onPress() {
        return handleTrackSelect(track);
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.trackItemContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeFastImage.default, {
            source: {
              uri: track.artwork,
              priority: _reactNativeFastImage.default.priority.normal
            },
            style: Object.assign(Object.assign({}, styles.trackArtworkImage), {}, {
              // opacity: 1,
              opacity: isActiveTrack ? 0.6 : 1
            })
          }), isActiveTrack && (playing ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLoaderKit.default, {
            style: styles.trackPlayingIconIndicator,
            name: "LineScaleParty",
            color: _$$_REQUIRE(_dependencyMap[10]).colors.icon
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            style: styles.trackPausedIndicator,
            name: "play",
            size: 24,
            color: _$$_REQUIRE(_dependencyMap[10]).colors.icon
          }))]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: {
              width: '100%'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              numberOfLines: 1,
              style: Object.assign(Object.assign({}, styles.trackTitleText), {}, {
                // color: colors.text,
                color: isActiveTrack ? _$$_REQUIRE(_dependencyMap[10]).colors.primary : _$$_REQUIRE(_dependencyMap[10]).colors.text
              }),
              children: track.title
            }), track.artist && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
              numberOfLines: 1,
              style: styles.trackArtistText,
              children: track.artist
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[11]).StopPropagation, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TrackShortcutsMenu.default, {
              track: track,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Entypo.default, {
                name: "dots-three-horizontal",
                size: 18,
                color: _$$_REQUIRE(_dependencyMap[10]).colors.icon
              })
            })
          })]
        })]
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    trackItemContainer: {
      flexDirection: 'row',
      columnGap: 14,
      alignItems: 'center',
      paddingRight: 20
    },
    trackPlayingIconIndicator: {
      position: 'absolute',
      top: 18,
      left: 16,
      width: 16,
      height: 16
    },
    trackPausedIndicator: {
      position: 'absolute',
      top: 14,
      left: 14
    },
    trackArtworkImage: {
      borderRadius: 8,
      width: 50,
      height: 50
    },
    trackTitleText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[12]).defaultStyles.text), {}, {
      fontSize: _$$_REQUIRE(_dependencyMap[10]).fontSize.sm,
      fontWeight: '600',
      maxWidth: '90%'
    }),
    trackArtistText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[12]).defaultStyles.text), {}, {
      color: _$$_REQUIRE(_dependencyMap[10]).colors.textMuted,
      fontSize: 14,
      marginTop: 4
    })
  });
  var _default = exports.default = TracksListItem;
  _$$_REQUIRE(_dependencyMap[13]).NativeWindStyleSheet.create({
    styles: {
      "absolute": {
        "position": "absolute"
      },
      "flex": {
        "display": "flex"
      }
    }
  });
