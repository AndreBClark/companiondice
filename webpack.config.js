const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      // Passing true will enable the default Workbox + Expo SW configuration.
      offline: true,
    }, 
    argv
  );

  config.resolve.alias = {
    ...config.resolve.alias,
    // Use Preact aliases
    react$: 'preact/compat',
    'react-dom$': 'preact/compat',
    // Fix the responder system which react-native-web depends on
    'react-dom/unstable-native-dependencies$': 'preact-responder-event-plugin',
  };


  return config;
};
