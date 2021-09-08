const withTM = require('next-transpile-modules')(['usfm-editor']);


module.exports = withTM({
  webpack: (config, { isServer, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  webpack5: true,
});
