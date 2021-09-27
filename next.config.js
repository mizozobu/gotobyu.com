const { ProvidePlugin } = require('webpack');
const mdxFactory = require('@next/mdx');
const remarkSectionize = require('remark-sectionize');
const rehypeSlug = require('rehype-slug');

const withMDX = mdxFactory({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkSectionize],
    rehypePlugins: [rehypeSlug],
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
