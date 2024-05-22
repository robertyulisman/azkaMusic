  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.useTracks = exports.usePlaylists = exports.useLibraryStore = exports.useFavorites = exports.useArtists = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _library = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var useLibraryStore = exports.useLibraryStore = (0, _$$_REQUIRE(_dependencyMap[3]).create)()(function (set) {
    return {
      tracks: _library.default,
      toggleTrackFavorite: function toggleTrackFavorite(track) {
        return set(function (state) {
          return {
            tracks: state.tracks.map(function (currentTrack) {
              if (currentTrack.url === track.url) {
                return Object.assign(Object.assign({}, currentTrack), {}, {
                  rating: currentTrack.rating === 1 ? 0 : 1
                });
              }
              return currentTrack;
            })
          };
        });
      },
      addToPlaylist: function addToPlaylist(track, playlistName) {
        return set(function (state) {
          return {
            tracks: state.tracks.map(function (currentTrack) {
              if (currentTrack.url === track.url) {
                var _currentTrack$playlis;
                return Object.assign(Object.assign({}, currentTrack), {}, {
                  playlist: [].concat((0, _toConsumableArray2.default)((_currentTrack$playlis = currentTrack.playlist) != null ? _currentTrack$playlis : []), [playlistName])
                });
              }
              return currentTrack;
            })
          };
        });
      }
    };
  });
  var useTracks = exports.useTracks = function useTracks() {
    return useLibraryStore(function (state) {
      return state.tracks;
    });
  };
  var useFavorites = exports.useFavorites = function useFavorites() {
    var favorites = useLibraryStore(function (state) {
      return state.tracks.filter(function (track) {
        return track.rating === 1;
      });
    });
    var toggleTrackFavorite = useLibraryStore(function (state) {
      return state.toggleTrackFavorite;
    });
    return {
      favorites: favorites,
      toggleTrackFavorite: toggleTrackFavorite
    };
  };
  var useArtists = exports.useArtists = function useArtists() {
    return useLibraryStore(function (state) {
      return state.tracks.reduce(function (acc, track) {
        var existingArtist = acc.find(function (artist) {
          return artist.name === track.artist;
        });
        if (existingArtist) {
          existingArtist.tracks.push(track);
        } else {
          var _track$artist;
          acc.push({
            name: (_track$artist = track.artist) != null ? _track$artist : 'Unknown',
            tracks: [track]
          });
        }
        return acc;
      }, []);
    });
  };
  var usePlaylists = exports.usePlaylists = function usePlaylists() {
    var playlists = useLibraryStore(function (state) {
      return state.tracks.reduce(function (acc, track) {
        var _track$playlist;
        (_track$playlist = track.playlist) == null ? undefined : _track$playlist.forEach(function (playlistName) {
          var existingPlaylist = acc.find(function (playlist) {
            return playlist.name === playlistName;
          });
          if (existingPlaylist) {
            existingPlaylist.tracks.push(track);
          } else {
            acc.push({
              name: playlistName,
              tracks: [track],
              artworkPreview: track.artwork || ''
            });
          }
        });
        return acc;
      }, []);
    });
    var addToPlaylist = useLibraryStore(function (state) {
      return state.addToPlaylist;
    });
    return {
      playlists: playlists,
      addToPlaylist: addToPlaylist
    };
  };
