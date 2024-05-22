  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _$$_REQUIRE(_dependencyMap[0]);
  var _reactNativeReanimated = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[1]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[2]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var _worklet_11088338315117_init_data = {
    code: "function anonymous(){const{translateX}=this.__closure;return{transform:[{translateX:translateX.value}]};}"
  };
  var MovingText = function MovingText(_ref) {
    var text = _ref.text,
      animationThreshold = _ref.animationThreshold,
      style = _ref.style;
    var translateX = (0, _reactNativeReanimated.useSharedValue)(0);
    var shouldAnimate = text.length >= animationThreshold;
    var textWidth = text.length * 3;
    (0, _react.useEffect)(function () {
      if (!shouldAnimate) return;
      translateX.value = (0, _reactNativeReanimated.withDelay)(1000, (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(-textWidth, {
        duration: 5000,
        easing: _reactNativeReanimated.Easing.linear
      }), -1, true));
      return function () {
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        translateX.value = 0;
      };
    }, [translateX, text, animationThreshold, shouldAnimate, textWidth]);
    var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
      var anonymous = function anonymous() {
        return {
          transform: [{
            translateX: translateX.value
          }]
        };
      };
      anonymous.__closure = {
        translateX: translateX
      };
      anonymous.__workletHash = 11088338315117;
      anonymous.__initData = _worklet_11088338315117_init_data;
      return anonymous;
    }());
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.Text, {
      numberOfLines: 1,
      style: [style, animatedStyle, shouldAnimate && {
        width: 9999,
        // preventing the ellipsis from appearing
        paddingLeft: 16 // avoid the initial character being barely visible
      }],
      children: text
    });
  };
  var _default = exports.default = MovingText;
