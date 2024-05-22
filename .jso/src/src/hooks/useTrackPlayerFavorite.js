  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useTrackPlayerFavorite = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _react = _$$_REQUIRE(_dependencyMap[2]);
  var _reactNativeTrackPlayer = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var useTrackPlayerFavorite = exports.useTrackPlayerFavorite = function useTrackPlayerFavorite() {
    var _favorites$find;
    var activeTrack = (0, _reactNativeTrackPlayer.useActiveTrack)();
    var _useFavorites = (0, _$$_REQUIRE(_dependencyMap[4]).useFavorites)(),
      favorites = _useFavorites.favorites,
      toggleTrackFavorite = _useFavorites.toggleTrackFavorite;
    var isFavorite = ((_favorites$find = favorites.find(function (track) {
      return track.url === (activeTrack == null ? undefined : activeTrack.url);
    })) == null ? undefined : _favorites$find.rating) === 1;

    // we're updating both the track player internal state and application internal state
    var toggleFavorite = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)(function* () {
      var id = yield _reactNativeTrackPlayer.default.getActiveTrackIndex();
      if (id == null) return;

      // update track player internal state
      yield _reactNativeTrackPlayer.default.updateMetadataForTrack(id, {
        rating: isFavorite ? 0 : 1
      });

      // update the app internal state
      if (activeTrack) {
        toggleTrackFavorite(activeTrack);
      }
    }), [isFavorite, toggleTrackFavorite, activeTrack]);
    return {
      isFavorite: isFavorite,
      toggleFavorite: toggleFavorite
    };
  };
