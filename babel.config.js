module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
        },
      },
    ],
    'jest-hoist',
    // Required by react native reanimated plugin
    'react-native-reanimated/plugin',
  ],
};
