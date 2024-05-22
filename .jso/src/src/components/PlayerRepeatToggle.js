  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PlayerRepeatToggle = undefined;
  var _objectDestructuringEmpty2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _MaterialCommunityIcons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[3]);
  var repeatOrder = [_$$_REQUIRE(_dependencyMap[4]).RepeatMode.Off, _$$_REQUIRE(_dependencyMap[4]).RepeatMode.Track, _$$_REQUIRE(_dependencyMap[4]).RepeatMode.Queue];
  var PlayerRepeatToggle = exports.PlayerRepeatToggle = function PlayerRepeatToggle(_ref) {
    var iconProps = Object.assign({}, ((0, _objectDestructuringEmpty2.default)(_ref), _ref));
    var _useTrackPlayerRepeat = (0, _$$_REQUIRE(_dependencyMap[5]).useTrackPlayerRepeatMode)(),
      repeatMode = _useTrackPlayerRepeat.repeatMode,
      changeRepeatMode = _useTrackPlayerRepeat.changeRepeatMode;
    var toggleRepeatMode = function toggleRepeatMode() {
      if (repeatMode == null) return;
      var currentIndex = repeatOrder.indexOf(repeatMode);
      var nextIndex = (currentIndex + 1) % repeatOrder.length;
      changeRepeatMode(repeatOrder[nextIndex]);
    };
    var icon = (0, _$$_REQUIRE(_dependencyMap[6]).match)(repeatMode).returnType().with(_$$_REQUIRE(_dependencyMap[4]).RepeatMode.Off, function () {
      return 'repeat-off';
    }).with(_$$_REQUIRE(_dependencyMap[4]).RepeatMode.Track, function () {
      return 'repeat-once';
    }).with(_$$_REQUIRE(_dependencyMap[4]).RepeatMode.Queue, function () {
      return 'repeat';
    }).otherwise(function () {
      return 'repeat-off';
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaterialCommunityIcons.default, Object.assign({
      name: icon,
      onPress: toggleRepeatMode,
      color: _$$_REQUIRE(_dependencyMap[7]).colors.icon
    }, iconProps));
  };
