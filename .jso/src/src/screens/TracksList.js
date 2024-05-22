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
    var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      indexModal = _useState2[0],
      setIndexModal = _useState2[1];
    var _useProgress = (0, _reactNativeTrackPlayer.useProgress)(250),
      position = _useProgress.position;
    var tracks = (0, _$$_REQUIRE(_dependencyMap[11]).useTracks)();
    var activeTrack = (0, _reactNativeTrackPlayer.useActiveTrack)();
    var trackIndex = tracks.findIndex(function (track) {
      return track.title === (activeTrack == null ? undefined : activeTrack.title);
    });

    // ref
    var bottomSheetModalRef = (0, _react.useRef)(null);

    // variables
    var snapPoints = (0, _react.useMemo)(function () {
      return [80, height];
    }, []);

    // callbacks
    var handlePresentModalPress = (0, _react.useCallback)(function () {
      var _bottomSheetModalRef$;
      (_bottomSheetModalRef$ = bottomSheetModalRef.current) == null ? undefined : _bottomSheetModalRef$.present();
    }, []);
    var handleSheetChanges = (0, _react.useCallback)(function (index) {
      // console.log('handleSheetChanges', index);
      setIndexModal(index);
    }, []);
    var id = (0, _$$_REQUIRE(_dependencyMap[12]).generateTracksListId)('songs');
    var queueOffset = (0, _react.useRef)(0);
    var _useQueue = (0, _$$_REQUIRE(_dependencyMap[11]).useQueue)(),
      activeQueueId = _useQueue.activeQueueId,
      setActiveQueueId = _useQueue.setActiveQueueId;
    var handleTrackSelect = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* (selectedTrack) {
        handlePresentModalPress();
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).BottomSheetModalProvider, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _$$_REQUIRE(_dependencyMap[14]).defaultStyles.container,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
          backgroundColor: _$$_REQUIRE(_dependencyMap[15]).colors.background
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, Object.assign(Object.assign({}, flatlistProps), {}, {
          data: tracks,
          contentContainerStyle: {
            paddingTop: 30,
            paddingBottom: 128
          },
          ListHeaderComponent: !hideQueueControls ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[16]).QueueControls, {
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
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).BottomSheetModal, {
          ref: bottomSheetModalRef,
          index: 0,
          snapPoints: snapPoints,
          onChange: handleSheetChanges,
          handleIndicatorStyle: {
            height: 0,
            backgroundColor: 'red'
          },
          handleStyle: {
            padding: 0
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).BottomSheetView, {
            style: styles.contentContainer,
            children: indexModal !== null && indexModal === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_FloatingPlayer.default, {}) : trackIndex >= 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[17]).MotiView, {
              from: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                delay: 300
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_player.default, {
                currentTime: position * 1000,
                lrc: ((_tracks$trackIndex = tracks[trackIndex]) == null ? undefined : _tracks$trackIndex.lrc) !== null ? (_tracks$trackIndex2 = tracks[trackIndex]) == null ? undefined : _tracks$trackIndex2.lrc.trim() : '[00:00.01]Lyrics doesn exist'
              })
            })
          })
        })]
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'grey'
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#252525',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
      // paddingTop: 8,
    }
  });
  var _default = exports.default = TracksList;
  _$$_REQUIRE(_dependencyMap[18]).NativeWindStyleSheet.create({
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
      }
    },
    atRules: {
      "container": [[["media", "(min-width: 640px)"]], [["media", "(min-width: 768px)"]], [["media", "(min-width: 1024px)"]], [["media", "(min-width: 1280px)"]], [["media", "(min-width: 1536px)"]]]
    },
    topics: {
      "container": ["width"]
    }
  });
