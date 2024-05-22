  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNativeTrackPlayer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[3]);
  var TrackShortcutsMenu = function TrackShortcutsMenu(_ref) {
    var track = _ref.track,
      children = _ref.children;
    //   const router = useRouter();

    var isFavorite = track.rating === 1;
    var _useFavorites = (0, _$$_REQUIRE(_dependencyMap[4]).useFavorites)(),
      toggleTrackFavorite = _useFavorites.toggleTrackFavorite;
    var _useQueue = (0, _$$_REQUIRE(_dependencyMap[5]).useQueue)(),
      activeQueueId = _useQueue.activeQueueId;
    var handlePressAction = function handlePressAction(id) {
      (0, _$$_REQUIRE(_dependencyMap[6]).match)(id).with('add-to-favorites', /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
        toggleTrackFavorite(track);

        // if the tracks is in the favorite queue, add it
        if (activeQueueId != null && activeQueueId.startsWith('favorites')) {
          yield _reactNativeTrackPlayer.default.add(track);
        }
      })).with('remove-from-favorites', /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
        toggleTrackFavorite(track);

        // if the track is in the favorites queue, we need to remove it
        if (activeQueueId != null && activeQueueId.startsWith('favorites')) {
          var queue = yield _reactNativeTrackPlayer.default.getQueue();
          var trackToRemove = queue.findIndex(function (queueTrack) {
            return queueTrack.url === track.url;
          });
          yield _reactNativeTrackPlayer.default.remove(trackToRemove);
        }
      })).with('add-to-playlist', function () {
        // it opens the addToPlaylist modal
        // router.push({ pathname: '(modals)/addToPlaylist', params: { trackUrl: track.url } });
      }).otherwise(function () {
        return undefined;
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[7]).MenuView, {
      onPressAction: function onPressAction(_ref4) {
        var event = _ref4.nativeEvent.event;
        return handlePressAction(event);
      },
      actions: [{
        id: isFavorite ? 'remove-from-favorites' : 'add-to-favorites',
        title: isFavorite ? 'Remove from favorites' : 'Add to favorites',
        image: isFavorite ? 'star.fill' : 'star'
      }, {
        id: 'add-to-playlist',
        title: 'Add to playlist',
        image: 'plus'
      }],
      children: children
    });
  };
  var _default = exports.default = TrackShortcutsMenu;
