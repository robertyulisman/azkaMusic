  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.generateTracksListId = exports.formatSecondsToMinutes = undefined;
  var formatSecondsToMinutes = exports.formatSecondsToMinutes = function formatSecondsToMinutes(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  var generateTracksListId = exports.generateTracksListId = function generateTracksListId(trackListName, search) {
    return `${trackListName}${`-${search}` || ''}`;
  };
