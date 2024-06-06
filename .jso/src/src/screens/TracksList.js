  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _FloatingPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _TracksListItem = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _player = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _react = _$$_REQUIRE(_dependencyMap[7]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[8]);
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[9]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[10]);
  var _excluded = ["hideQueueControls"];
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;
  var ItemDivider = function ItemDivider() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        marginVertical: 9,
        marginLeft: 60
      }
    });
  };
  var TracksList = function TracksList(_ref) {
    var _tracks$trackIndex, _tracks$trackIndex2;
    var _ref$hideQueueControl = _ref.hideQueueControls,
      hideQueueControls = _ref$hideQueueControl === undefined ? false : _ref$hideQueueControl,
      flatlistProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var _useProgress = (0, _reactNativeTrackPlayer.useProgress)(250),
      position = _useProgress.position;
    var tracks = (0, _$$_REQUIRE(_dependencyMap[11]).useTracks)();
    var activeTrack = (0, _reactNativeTrackPlayer.useActiveTrack)();
    var trackIndex = tracks.findIndex(function (track) {
      return track.title === (activeTrack == null ? undefined : activeTrack.title);
    });
    var _useIsPlaying = (0, _reactNativeTrackPlayer.useIsPlaying)(),
      playing = _useIsPlaying.playing;
    var id = (0, _$$_REQUIRE(_dependencyMap[12]).generateTracksListId)('songs');
    var queueOffset = (0, _react.useRef)(0);
    var _useQueue = (0, _$$_REQUIRE(_dependencyMap[11]).useQueue)(),
      activeQueueId = _useQueue.activeQueueId,
      setActiveQueueId = _useQueue.setActiveQueueId;
    var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showMiniPlayer = _useState2[0],
      setShowMiniPlayer = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showPlayer = _useState4[0],
      setShowPlayer = _useState4[1];
    (0, _react.useEffect)(function () {
      if (playing) {
        setShowMiniPlayer(true);
      }
    }, [playing]);
    var handlePressMiniPlayer = function handlePressMiniPlayer() {
      setShowMiniPlayer(false);
      setTimeout(function () {
        setShowPlayer(true);
      }, 500);
    };
    (0, _$$_REQUIRE(_dependencyMap[13]).useFocusEffect)((0, _react.useCallback)(function () {
      var onBackPress = function onBackPress() {
        setShowPlayer(false);
        if (playing) {
          setShowMiniPlayer(true);
        }
        return true;
      };
      var subscribe = _reactNative.BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return function () {
        return subscribe.remove();
      };
    }, [playing]));
    var handleTrackSelect = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (selectedTrack) {
        var trackIndex = tracks.findIndex(function (track) {
          return track.url === selectedTrack.url;
        });
        if (trackIndex === -1) return;
        var isChangingQueue = id !== activeQueueId;
        if (isChangingQueue) {
          var beforeTracks = tracks.slice(0, trackIndex);
          var afterTracks = tracks.slice(trackIndex + 1);
          yield _reactNativeTrackPlayer.default.reset();

          // we construct the new queue
          yield _reactNativeTrackPlayer.default.add(selectedTrack);
          yield _reactNativeTrackPlayer.default.add(afterTracks);
          yield _reactNativeTrackPlayer.default.add(beforeTracks);
          yield _reactNativeTrackPlayer.default.play();
          queueOffset.current = trackIndex;
          setActiveQueueId(id);
        } else {
          var nextTrackIndex = trackIndex - queueOffset.current < 0 ? tracks.length + trackIndex - queueOffset.current : trackIndex - queueOffset.current;
          yield _reactNativeTrackPlayer.default.skip(nextTrackIndex);
          _reactNativeTrackPlayer.default.play();
        }
      });
      return function handleTrackSelect(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [{
        paddingTop: 42
      }, _$$_REQUIRE(_dependencyMap[14]).defaultStyles.container],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        backgroundColor: 'transparent',
        translucent: true
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, Object.assign(Object.assign({}, flatlistProps), {}, {
        data: tracks,
        contentContainerStyle: {
          paddingTop: 30,
          paddingBottom: 128
        },
        ListHeaderComponent: !hideQueueControls ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[15]).QueueControls, {
          tracks: tracks,
          style: {
            paddingBottom: 20
          }
        }) : undefined,
        ListFooterComponent: ItemDivider,
        ItemSeparatorComponent: ItemDivider,
        ListEmptyComponent: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            children: "No songs found"
          })
        }),
        renderItem: function renderItem(_ref3) {
          var track = _ref3.item;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TracksListItem.default, {
            track: track,
            onTrackSelect: handleTrackSelect
          });
        }
      })), showMiniPlayer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[16]).MotiView, {
        from: {
          opacity: 0,
          translateY: 30
        },
        animate: {
          opacity: 1,
          translateY: -16
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FloatingPlayer.default, {
          onPress: handlePressMiniPlayer
        })
      }), showPlayer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[16]).MotiView, {
        from: {
          opacity: 0,
          translateY: 130
        },
        animate: {
          opacity: 1,
          translateY: 0
        },
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_player.default, {
          playing: playing,
          currentTime: position * 1000,
          lrc: ((_tracks$trackIndex = tracks[trackIndex]) == null ? undefined : _tracks$trackIndex.lrc) !== null ? (_tracks$trackIndex2 = tracks[trackIndex]) == null ? undefined : _tracks$trackIndex2.lrc.trim() : '[00:00.01]Lyrics doesn exist'
        })
      })]
    });
  };
  var _default = exports.default = TracksList;
  _$$_REQUIRE(_dependencyMap[17]).NativeWindStyleSheet.create({
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
      "absolute": {
        "position": "absolute"
      }
    },
    atRules: {
      "container": [[["media", "(min-width: 640px)"]], [["media", "(min-width: 768px)"]], [["media", "(min-width: 1024px)"]], [["media", "(min-width: 1280px)"]], [["media", "(min-width: 1536px)"]]]
    },
    topics: {
      "container": ["width"]
    }
  });
