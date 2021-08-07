/* eslint-disable */
const { ProvidePlugin } = require('webpack');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new ProvidePlugin({
        classNames: 'classnames',
      }),
    ],
  }),
};
