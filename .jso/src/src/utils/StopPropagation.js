  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StopPropagation = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[1]);
  var StopPropagation = exports.StopPropagation = function StopPropagation(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      onStartShouldSetResponder: function onStartShouldSetResponder() {
        return true;
      },
      onTouchEnd: function onTouchEnd(e) {
        return e.stopPropagation();
      },
      children: children
    });
  };
