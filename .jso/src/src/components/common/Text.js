  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _objectWithoutProperties2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[3]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[4]);
  var _excluded = ["children", "style", "type", "variant"];
  var Text = function Text(_ref) {
    var children = _ref.children,
      style = _ref.style,
      type = _ref.type,
      variant = _ref.variant,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var passedStyles = Array.isArray(style) ? Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(style))) : style;
    var textStyle = function textStyle() {
      var textStyle = '';
      switch (variant) {
        case 'heading-1':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.heading1;
          break;
        case 'heading-1-medium':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.heading1Medium;
          break;
        case 'heading-2':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.heading2;
          break;
        case 'heading-3':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.heading3;
          break;
        case 'label-1':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.label1;
          break;
        case 'label-2':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.label2;
          break;
        case 'label-2-medium':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.label2Medium;
          break;
        case 'label-3':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.label3;
          break;
        case 'label-3-medium':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.label3Medium;
          break;
        case 'body-1':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.body1;
          break;
        case 'body-2':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.body2;
          break;
        case 'body-3':
          textStyle = _$$_REQUIRE(_dependencyMap[5]).FONTS.body3;
          break;
      }
      return textStyle;
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, Object.assign(Object.assign({}, rest), {}, {
      allowFontScaling: false,
      style: [{
        color: type === 'secondary' ? _$$_REQUIRE(_dependencyMap[5]).COLORS.dark[300] : _$$_REQUIRE(_dependencyMap[5]).COLORS.dark[500]
      }, textStyle(), Object.assign({}, passedStyles)],
      children: children
    }));
  };
  var _default = exports.default = Text;
