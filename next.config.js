const mdxFactory = require('@next/mdx');
const rehypeSlug = require('rehype-slug');
const remarkSectionize = require('remark-sectionize');
const { ProvidePlugin } = require('webpack');

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
