  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _classCallCheck2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _createClass2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _possibleConstructorReturn2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _getPrototypeOf2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _inherits2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[9]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  var GREY = 'rgb(234, 234, 234)';
  var shimmeringAnimatedValue = new _reactNative.Animated.Value(0);
  var ShimmringAnimation = _reactNative.Animated.loop(_reactNative.Animated.timing(shimmeringAnimatedValue, {
    useNativeDriver: false,
    delay: 1200,
    duration: 750,
    toValue: 1
  }));
  var Shimmering = exports.default = /*#__PURE__*/function (_PureComponent) {
    function Shimmering(props) {
      var _this;
      (0, _classCallCheck2.default)(this, Shimmering);
      _this = _callSuper(this, Shimmering, [props]);
      _this.gradientColors = [GREY, '#fff', GREY];
      _this.state = {
        viewWidth: -1
      };
      _this.animation = ShimmringAnimation;
      return _this;
    }
    (0, _inherits2.default)(Shimmering, _PureComponent);
    return (0, _createClass2.default)(Shimmering, [{
      key: "startAnimation",
      value: function startAnimation() {
        this.animation.start();
      }
    }, {
      key: "render",
      value: function render() {
        var _wrapperStyle$width,
          _wrapperStyle$height,
          _this2 = this;
        var _this$props = this.props,
          colors = _this$props.colors,
          gradientStyle = _this$props.gradientStyle,
          wrapperStyle = _this$props.wrapperStyle;
        var width = _reactNative.Dimensions.get('screen').width;
        var loadingStyle = {
          backgroundColor: GREY
        };
        var left = this._getLeftValue();
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: {
            width: (_wrapperStyle$width = wrapperStyle == null ? undefined : wrapperStyle.width) != null ? _wrapperStyle$width : width,
            height: (_wrapperStyle$height = wrapperStyle == null ? undefined : wrapperStyle.height) != null ? _wrapperStyle$height : 80
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.container, loadingStyle, wrapperStyle],
            onLayout: function onLayout(event) {
              return _this2._onLayoutChange(event);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
              style: [{
                flex: 1,
                left: left
              }, gradientStyle],
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: colors || this.gradientColors,
                start: {
                  x: 0.3,
                  y: 0.2
                },
                end: {
                  x: 0.8,
                  y: 0.5
                },
                style: {
                  flex: 1
                }
              })
            })
          })
        });
      }
    }, {
      key: "_onLayoutChange",
      value: function _onLayoutChange(event) {
        this.setState({
          viewWidth: event.nativeEvent.layout.width
        });
        this.startAnimation();
      }
    }, {
      key: "_getLeftValue",
      value: function _getLeftValue() {
        var viewWidth = this.state.viewWidth;
        return shimmeringAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-viewWidth, viewWidth]
        });
      }
    }]);
  }(_react.PureComponent);
  var styles = _reactNative.StyleSheet.create({
    container: {
      overflow: 'hidden',
      flex: 0,
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    }
  });
  _$$_REQUIRE(_dependencyMap[10]).NativeWindStyleSheet.create({
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
