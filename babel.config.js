module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@navigation': './src/navigation',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
