  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.utilsStyles = exports.defaultStyles = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var defaultStyles = exports.defaultStyles = _reactNative.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: _$$_REQUIRE(_dependencyMap[1]).COLORS.dark['900'],
      paddingHorizontal: 16
    },
    text: {
      fontSize: _$$_REQUIRE(_dependencyMap[2]).fontSize.base,
      color: _$$_REQUIRE(_dependencyMap[2]).colors.text
    }
  });
  var utilsStyles = exports.utilsStyles = _reactNative.StyleSheet.create({
    centeredRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    slider: {
      height: 7,
      borderRadius: 16
    },
    itemSeparator: {
      borderColor: _$$_REQUIRE(_dependencyMap[2]).colors.textMuted,
      borderWidth: _reactNative.StyleSheet.hairlineWidth,
      opacity: 0.3
    },
    emptyContentText: Object.assign(Object.assign({}, defaultStyles.text), {}, {
      color: _$$_REQUIRE(_dependencyMap[2]).colors.textMuted,
      textAlign: 'center',
      marginTop: 20
    }),
    emptyContentImage: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: 40,
      opacity: 0.3
    }
  });
  _$$_REQUIRE(_dependencyMap[3]).NativeWindStyleSheet.create({
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
      "flex": {
        "display": "flex"
      }
    },
    atRules: {
      "container": [[["media", "(min-width: 640px)"]], [["media", "(min-width: 768px)"]], [["media", "(min-width: 1024px)"]], [["media", "(min-width: 1280px)"]], [["media", "(min-width: 1536px)"]]]
    },
    topics: {
      "container": ["width"]
    }
  });
