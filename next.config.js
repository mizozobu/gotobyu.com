const mdxFactory = require('@next/mdx');
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config;
/* eslint-enable import/no-extraneous-dependencies */
const rehypeSlug = require('rehype-slug');
const remarkSectionize = require('remark-sectionize');

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
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
