  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SIZE = exports.FONTS = exports.COLORS = undefined;
  var _GetFontSize = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[2]);
  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;
  var COLORS = exports.COLORS = {
    primary: {
      500: '#E31320',
      400: '#EE3440',
      300: '#F15D66',
      200: '#F5858C',
      100: '#F8AEB2',
      50: '#FCD6D9'
    },
    secondary: {
      500: '#2C76CE',
      400: '#4C8DD9',
      300: '#70A3E0',
      200: '#94BAE8',
      100: '#B8D1F0',
      50: '#DBE8F7'
    },
    purple: {
      500: '#682DE5',
      400: '#8150E9',
      300: '#9A73EE',
      200: '#B396F2',
      100: '#CDB9F6',
      50: '#E6DCFB'
    },
    warning: {
      500: '#FCA311',
      400: '#FDB239',
      300: '#FDC260',
      200: '#FED188',
      100: '#FEE0B0',
      50: '#FFF0D7'
    },
    success: {
      500: '#42A444',
      400: '#5AB55C',
      300: '#84C886',
      200: '#B2DCB2',
      100: '#D5ECD5',
      50: '#F4FAF5'
    },
    additional: {
      100: '#17AAA5',
      200: '#FCA311',
      300: '#F15679',
      400: '#682DE5',
      500: '#17A1FA',
      600: '#FCA311',
      700: '#5AB55C',
      800: '#458039'
    },
    dark: {
      900: '#090A0B',
      800: '#121416',
      700: '#1C1E22',
      600: '#25282D',
      500: '#2E3238',
      400: '#373C43',
      300: '#40464E',
      200: '#4A505A',
      100: '#7D838D',
      50: '#8D939B'
    },
    light: {
      500: '#9DA2A9',
      400: '#AEB2B8',
      300: '#BEC1C6',
      200: '#CED1D4',
      100: '#DEE0E2',
      50: '#EFF0F1'
    }
  };
  var FONTS = exports.FONTS = {
    heading1: {
      fontFamily: 'Manrope-ExtraBold',
      fontSize: (0, _GetFontSize.default)(22),
      lineHeight: (0, _GetFontSize.default)(32),
      letterSpacing: 0.1
    },
    heading1Medium: {
      fontFamily: 'Manrope-Medium',
      fontSize: (0, _GetFontSize.default)(22),
      lineHeight: (0, _GetFontSize.default)(32),
      letterSpacing: 0.1
    },
    heading2: {
      fontFamily: 'Manrope-Bold',
      fontSize: (0, _GetFontSize.default)(18),
      lineHeight: (0, _GetFontSize.default)(28),
      letterSpacing: 0.1
    },
    heading3: {
      fontFamily: 'Manrope-Bold',
      fontSize: (0, _GetFontSize.default)(16),
      lineHeight: (0, _GetFontSize.default)(24),
      letterSpacing: 0.1
    },
    label1: {
      fontFamily: 'Manrope-Bold',
      fontSize: (0, _GetFontSize.default)(14),
      lineHeight: (0, _GetFontSize.default)(22),
      letterSpacing: 0.1
    },
    label2: {
      fontFamily: 'Manrope-Bold',
      fontSize: (0, _GetFontSize.default)(12),
      lineHeight: (0, _GetFontSize.default)(18),
      letterSpacing: 0.1
    },
    label2Medium: {
      fontFamily: 'Manrope-Medium',
      fontSize: (0, _GetFontSize.default)(12),
      lineHeight: (0, _GetFontSize.default)(18),
      letterSpacing: 0.1
    },
    label3: {
      fontFamily: 'Manrope-Bold',
      fontSize: (0, _GetFontSize.default)(10),
      lineHeight: (0, _GetFontSize.default)(16),
      letterSpacing: 0.1
    },
    label3Medium: {
      fontFamily: 'Manrope-Medium',
      fontSize: (0, _GetFontSize.default)(10),
      lineHeight: (0, _GetFontSize.default)(16),
      letterSpacing: 0.1
    },
    body1: {
      fontFamily: 'Manrope-Regular',
      fontSize: (0, _GetFontSize.default)(14),
      lineHeight: (0, _GetFontSize.default)(22),
      letterSpacing: 0.1
    },
    body2: {
      fontFamily: 'Manrope-Regular',
      fontSize: (0, _GetFontSize.default)(12),
      lineHeight: (0, _GetFontSize.default)(18),
      letterSpacing: 0.1
    },
    body3: {
      fontFamily: 'Manrope-Regular',
      fontSize: (0, _GetFontSize.default)(10),
      lineHeight: (0, _GetFontSize.default)(16),
      letterSpacing: 0.1
    }
  };
  var SIZE = exports.SIZE = {
    width: width,
    height: height
  };
