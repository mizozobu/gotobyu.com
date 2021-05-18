const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
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
    };

    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
