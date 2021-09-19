const { ProvidePlugin } = require('webpack');
const mdxFactory = require('@next/mdx');
const { sectionize } = require('./plugins/remark');

const withMDX = mdxFactory({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [sectionize],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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

module.exports = withMDX(nextConfig);
