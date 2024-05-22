module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-reanimated/plugin'],
    ['nativewind/babel'],
    ['@babel/plugin-transform-object-rest-spread'],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['./src'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
