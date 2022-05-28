const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              sourceMap: true,
              config: resolve(__dirname, '..', 'postcss.config.js'),
            },
          },
        },
      ],
    });

    config.resolve.alias = {
      '~': resolve(__dirname, '..', 'src'),
      '@c': resolve(__dirname, '..', 'src', 'components'),
      '@d': resolve(__dirname, '..', 'src', 'data'),
      '@e': resolve(__dirname, '..', 'e2e'),
      '@p': resolve(__dirname, '..', 'public'),
      '@l': resolve(__dirname, '..', 'src', 'lib'),
      '@s': resolve(__dirname, '..', 'src', 'states'),
    };

    return config;
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
