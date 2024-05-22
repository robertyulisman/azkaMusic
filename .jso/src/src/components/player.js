  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _FontAwesome = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _MovingText = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[5]);
  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;
  var PlayerScreen = function PlayerScreen(_ref) {
    var _activeTrack$title;
    var lrc = _ref.lrc,
      currentTime = _ref.currentTime;
    var activeTrack = (0, _$$_REQUIRE(_dependencyMap[6]).useActiveTrack)();
    // const { imageColors } = usePlayerBackground(activeTrack?.artwork ?? '');

    var _useSafeAreaInsets = (0, _$$_REQUIRE(_dependencyMap[7]).useSafeAreaInsets)(),
      top = _useSafeAreaInsets.top,
      bottom = _useSafeAreaInsets.bottom;
    var _useTrackPlayerFavori = (0, _$$_REQUIRE(_dependencyMap[8]).useTrackPlayerFavorite)(),
      isFavorite = _useTrackPlayerFavori.isFavorite,
      toggleFavorite = _useTrackPlayerFavori.toggleFavorite;
    if (!activeTrack) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [_$$_REQUIRE(_dependencyMap[9]).defaultStyles.container, {
          justifyContent: 'center'
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          color: _$$_REQUIRE(_dependencyMap[10]).colors.icon
        })
      });
    }

    // console.log('imageColors', imageColors);

    var lineRenderer = function lineRenderer(_ref2) {
      var content = _ref2.lrcLine.content,
        active = _ref2.active;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: {
          textAlign: 'center',
          fontFamily: active ? 'Manrope-ExtraBold' : 'Manrope-Regular',
          color: 'white',
          opacity: active ? 1 : 0.4,
          fontSize: active ? 16 : 12
        },
        children: content
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
      style: {
        flex: 1,
        width: width
      },
      colors: [_$$_REQUIRE(_dependencyMap[10]).colors.background, _$$_REQUIRE(_dependencyMap[10]).colors.primary],
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.overlayContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DismissPlayerSymbol, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: {
            flex: 1,
            marginTop: top + 70,
            marginBottom: bottom
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: styles.artworkImageContainer,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[11]).Lyric
            // style={{ height: 300 }}
            , {
              lrc: lrc,
              currentTime: currentTime,
              lineHeight: 24,
              lineRenderer: lineRenderer,
              autoScroll: true,
              activeLineHeight: 24,
              showsVerticalScrollIndicator: false
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)', _$$_REQUIRE(_dependencyMap[10]).colors.background],
              style: {
                width: width,
                height: 150,
                top: 0,
                position: 'absolute'
              },
              start: {
                x: 0.5,
                y: 1
              },
              end: {
                x: 0.5,
                y: 0
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
            style: {
              flex: 1
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ['transparent', 'rgba(0,0,0,0.8)', _$$_REQUIRE(_dependencyMap[10]).colors.background, _$$_REQUIRE(_dependencyMap[10]).colors.background],
              style: {
                width: width,
                height: height * 0.6,
                bottom: 0,
                position: 'absolute'
              },
              start: {
                x: 0.5,
                y: 0
              },
              end: {
                x: 0.5,
                y: 1
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              style: {
                marginTop: 'auto',
                position: 'relative',
                paddingHorizontal: 16
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: {
                  height: 60
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  style: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: styles.trackTitleContainer,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MovingText.default, {
                      text: (_activeTrack$title = activeTrack.title) != null ? _activeTrack$title : '',
                      animationThreshold: 30,
                      style: styles.trackTitleText
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FontAwesome.default, {
                    name: isFavorite ? 'heart' : 'heart-o',
                    size: 20,
                    color: isFavorite ? _$$_REQUIRE(_dependencyMap[10]).colors.primary : _$$_REQUIRE(_dependencyMap[10]).colors.icon,
                    style: {
                      marginHorizontal: 14
                    },
                    onPress: toggleFavorite
                  })]
                }), activeTrack.artist && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
                  numberOfLines: 1,
                  style: [styles.trackArtistText, {
                    marginTop: 6
                  }],
                  children: activeTrack.artist
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[12]).PlayerProgressBar, {
                style: {
                  marginTop: 32
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).PlayerControls, {
                style: {
                  marginTop: 40
                }
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: {
                paddingHorizontal: 16,
                marginTop: 40,
                marginBottom: 22
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[14]).PlayerVolumeBar, {
                style: {
                  marginTop: 'auto',
                  marginBottom: 30
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _$$_REQUIRE(_dependencyMap[9]).utilsStyles.centeredRow,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[15]).PlayerRepeatToggle, {
                size: 30,
                style: {
                  marginBottom: 6
                }
              })
            })]
          })]
        })]
      })
    });
  };
  var DismissPlayerSymbol = function DismissPlayerSymbol() {
    var _useSafeAreaInsets2 = (0, _$$_REQUIRE(_dependencyMap[7]).useSafeAreaInsets)(),
      top = _useSafeAreaInsets2.top;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        position: 'absolute',
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        accessible: false,
        style: {
          width: 50,
          height: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
          opacity: 0.7
        }
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    overlayContainer: {
      flex: 1,
      // ...defaultStyles.container,
      // paddingHorizontal: screenPadding.horizontal,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    artworkImageContainer: {
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.44,
      shadowRadius: 11.0,
      flexDirection: 'row',
      justifyContent: 'center',
      height: '45%'
    },
    artworkImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 12
    },
    trackTitleContainer: {
      flex: 1,
      overflow: 'hidden'
    },
    trackTitleText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[9]).defaultStyles.text), {}, {
      fontSize: 22,
      fontFamily: 'Manrope-ExtraBold'
    }),
    trackArtistText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[9]).defaultStyles.text), {}, {
      fontSize: _$$_REQUIRE(_dependencyMap[10]).fontSize.base,
      opacity: 0.8,
      maxWidth: '90%',
      fontFamily: 'Manrope-Regular'
    })
  });
  var _default = exports.default = PlayerScreen;
  _$$_REQUIRE(_dependencyMap[16]).NativeWindStyleSheet.create({
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
      },
      "relative": {
        "position": "relative"
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
