  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PlayerVolumeBar = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[3]);
  var PlayerVolumeBar = exports.PlayerVolumeBar = function PlayerVolumeBar(_ref) {
    var style = _ref.style;
    var _useTrackPlayerVolume = (0, _$$_REQUIRE(_dependencyMap[4]).useTrackPlayerVolume)(),
      volume = _useTrackPlayerVolume.volume,
      updateVolume = _useTrackPlayerVolume.updateVolume;
    var progress = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(0);
    var min = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(0);
    var max = (0, _$$_REQUIRE(_dependencyMap[5]).useSharedValue)(1);
    progress.value = volume != null ? volume : 0;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
          name: "volume-low",
          size: 20,
          color: _$$_REQUIRE(_dependencyMap[6]).colors.icon,
          style: {
            opacity: 0.8
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: {
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 10
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[7]).Slider, {
            progress: progress,
            minimumValue: min,
            containerStyle: _$$_REQUIRE(_dependencyMap[8]).utilsStyles.slider,
            onValueChange: function onValueChange(value) {
              updateVolume(value);
            },
            renderBubble: function renderBubble() {
              return null;
            },
            theme: {
              maximumTrackTintColor: _$$_REQUIRE(_dependencyMap[6]).colors.maximumTrackTintColor,
              minimumTrackTintColor: _$$_REQUIRE(_dependencyMap[6]).colors.minimumTrackTintColor
            },
            thumbWidth: 0,
            maximumValue: max
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
          name: "volume-high",
          size: 20,
          color: _$$_REQUIRE(_dependencyMap[6]).colors.icon,
          style: {
            opacity: 0.8
          }
        })]
      })
    });
  };
  _$$_REQUIRE(_dependencyMap[9]).NativeWindStyleSheet.create({
    styles: {
      "flex": {
        "display": "flex"
      }
    }
  });
