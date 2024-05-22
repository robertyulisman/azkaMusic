  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _react = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[2]);
  var AdmobBanner = function AdmobBanner(props) {
    var adUnitId = _$$_REQUIRE(_dependencyMap[3]).admob.adaptiveBanner;
    if (_$$_REQUIRE(_dependencyMap[3]).setting.showAds) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_$$_REQUIRE(_dependencyMap[4]).BannerAd, {
        unitId: adUnitId,
        size: _$$_REQUIRE(_dependencyMap[4]).BannerAdSize.ANCHORED_ADAPTIVE_BANNER
      });
    }
    return null;
  };
  var _default = exports.default = AdmobBanner;
