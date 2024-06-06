  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[1]);
  var _reactNativeFastImage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNativeLoaderKit = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNativeSvg = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _FontAwesome = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _MovingText = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[7]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PlayerScreen = function PlayerScreen(_ref) {
    var _activeTrack$title;
    var lrc = _ref.lrc,
      currentTime = _ref.currentTime,
      playing = _ref.playing;
    var activeTrack = (0, _$$_REQUIRE(_dependencyMap[8]).useActiveTrack)();
    var _useSafeAreaInsets = (0, _$$_REQUIRE(_dependencyMap[9]).useSafeAreaInsets)(),
      top = _useSafeAreaInsets.top,
      bottom = _useSafeAreaInsets.bottom;
    var _useTrackPlayerFavori = (0, _$$_REQUIRE(_dependencyMap[10]).useTrackPlayerFavorite)(),
      isFavorite = _useTrackPlayerFavori.isFavorite,
      toggleFavorite = _useTrackPlayerFavori.toggleFavorite;
    if (!activeTrack) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [_$$_REQUIRE(_dependencyMap[11]).defaultStyles.container, {
          justifyContent: 'center'
        }],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          color: _$$_REQUIRE(_dependencyMap[12]).colors.icon
        })
      });
    }
    var lineRenderer = function lineRenderer(_ref2) {
      var content = _ref2.lrcLine.content,
        active = _ref2.active;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).Text, {
        variant: active ? 'label-1' : 'body-2',
        style: {
          textAlign: 'center',
          color: active ? _$$_REQUIRE(_dependencyMap[14]).COLORS.warning['400'] : _$$_REQUIRE(_dependencyMap[14]).COLORS.warning['200'],
          opacity: active ? 1 : 0.4
        },
        children: content
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.overlayContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        translucent: true,
        backgroundColor: 'transparent'
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          position: 'absolute',
          top: 80,
          alignSelf: 'center',
          alignItems: 'center',
          zIndex: 999
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeFastImage.default, {
          style: {
            width: 140,
            height: 140,
            borderRadius: 70,
            opacity: 0.5
          },
          source: {
            uri: activeTrack.artwork
          }
        }), playing && playing !== undefined && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLoaderKit.default, {
          style: {
            position: 'absolute',
            top: 35,
            width: 60,
            height: 60
          },
          name: "LineScalePulseOut",
          color: _$$_REQUIRE(_dependencyMap[12]).colors.icon
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          flex: 1,
          marginTop: top + 70
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[15]).Lyric, {
            style: {
              paddingHorizontal: 16
            },
            lrc: lrc,
            currentTime: currentTime,
            lineHeight: 24,
            lineRenderer: lineRenderer,
            autoScroll: true,
            activeLineHeight: 24,
            showsVerticalScrollIndicator: false
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.default, {
            style: {
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0
            },
            width: _$$_REQUIRE(_dependencyMap[14]).SIZE.width,
            height: 200,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
                id: "a",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
                  offset: "50%",
                  stopColor: _$$_REQUIRE(_dependencyMap[14]).COLORS.dark['900']
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
                  offset: "100%",
                  stopColor: _$$_REQUIRE(_dependencyMap[14]).COLORS.primary['500'],
                  stopOpacity: 0
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Rect, {
              fill: "url(#a)",
              width: _$$_REQUIRE(_dependencyMap[14]).SIZE.width,
              height: 200
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.default, {
            style: {
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0
            },
            width: _$$_REQUIRE(_dependencyMap[14]).SIZE.width,
            height: 200,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
                id: "a",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
                  offset: "0%",
                  stopColor: 'transparent',
                  stopOpacity: 0
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
                  offset: "80%",
                  stopColor: _$$_REQUIRE(_dependencyMap[14]).COLORS.dark['900']
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Rect, {
              fill: "url(#a)",
              width: _$$_REQUIRE(_dependencyMap[14]).SIZE.width,
              height: 200
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
                  color: isFavorite ? _$$_REQUIRE(_dependencyMap[14]).COLORS.primary['500'] : _$$_REQUIRE(_dependencyMap[14]).COLORS.light['100'],
                  style: {
                    marginHorizontal: 14
                  },
                  onPress: toggleFavorite
                })]
              }), activeTrack.artist && /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[13]).Text, {
                variant: "heading-2",
                numberOfLines: 1,
                style: [{
                  marginTop: 6
                }],
                children: activeTrack.artist
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[16]).PlayerProgressBar, {
              style: {
                marginTop: 32
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[17]).PlayerControls, {
              style: {
                marginTop: 22
              }
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 22
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[18]).PlayerVolumeBar, {
              style: {
                marginTop: 'auto',
                marginBottom: 10
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: _$$_REQUIRE(_dependencyMap[11]).utilsStyles.centeredRow,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[19]).PlayerRepeatToggle, {
              size: 30,
              style: {
                marginBottom: 32
              }
            })
          })]
        })]
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    overlayContainer: {
      flex: 1,
      backgroundColor: _$$_REQUIRE(_dependencyMap[14]).COLORS.dark['900']
    },
    trackTitleContainer: {
      flex: 1,
      overflow: 'hidden'
    },
    trackTitleText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[11]).defaultStyles.text), {}, {
      fontSize: 22,
      fontFamily: 'Manrope-ExtraBold'
    }),
    trackArtistText: Object.assign(Object.assign({}, _$$_REQUIRE(_dependencyMap[11]).defaultStyles.text), {}, {
      fontSize: _$$_REQUIRE(_dependencyMap[12]).fontSize.base,
      opacity: 0.8,
      maxWidth: '90%',
      fontFamily: 'Manrope-Regular'
    })
  });
  var _default = exports.default = PlayerScreen;
  _$$_REQUIRE(_dependencyMap[20]).NativeWindStyleSheet.create({
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
