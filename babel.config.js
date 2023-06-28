module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        } 
      ]
    ],
    // presets: ["babel-preset-expo"],
      // "presets": ["@babel/preset-typescript"],
      // 'module:metro-react-native-babel-preset'
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-dotenv",
        },
      ],
    ],
    plugins: [
      "react-native-reanimated/plugin",
    ],
  };
};
