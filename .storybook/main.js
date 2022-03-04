const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
  ],
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
      '@cmp': resolve(__dirname, '..', 'src', 'components'),
      '@cnt': resolve(__dirname, '..', 'src', 'containers'),
      '@d': resolve(__dirname, '..', 'src', 'data'),
      '@p': resolve(__dirname, '..', 'public'),
      '@l': resolve(__dirname, '..', 'src', 'lib'),
      '@s': resolve(__dirname, '..', 'src', 'states'),
    };

    return config;
  },
  core: {
    // manually added webpack@5 util https://github.com/storybookjs/storybook/issues/15336 is solved
    builder: 'webpack5',
  },
};
