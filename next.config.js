const mdxFactory = require('@next/mdx');
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config;
/* eslint-enable import/no-extraneous-dependencies */
const rehypeSlug = require('rehype-slug');
const remarkSectionize = require('remark-sectionize');
const visit = require('unist-util-visit');

/**
 * Remark plugin to remove a space converted from a new line in markdown
 */
const remarkJPN = () => (tree) => {
  visit(tree, 'text', (node) => {
    // eslint-disable-next-line no-param-reassign
    node.value = node.value.replace(/\r\n|\r|\n/g, '');
  });
};

/**
 * MDX setting
 */
const withMDX = mdxFactory({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkSectionize, remarkJPN],
    rehypePlugins: [rehypeSlug],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
