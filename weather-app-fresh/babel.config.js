module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        // Expo Router usa archivos especiales como root layouts
        'expo-router/babel',
        // Configuración de react-native-dotenv
        [
          'module:react-native-dotenv',
          {
            moduleName: '@env',
            path: '.env',
            blacklist: null,
            whitelist: null,
            safe: false,
            allowUndefined: true,
          },
        ],
      ],
    };
  };