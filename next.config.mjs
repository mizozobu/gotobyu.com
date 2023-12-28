// eslint-disable-next-line import/no-extraneous-dependencies
import nextBundleAnalyzer from '@next/bundle-analyzer';
import mdxFactory from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkSectionize from 'remark-sectionize';
import { visit } from 'unist-util-visit';

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? nextBundleAnalyzer({ enabled: true })
    : (config) => config;

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
  experimental: {
    instrumentationHook: true,
    // typedRoutes: true,
  },
  // workaround for tree shaking re-exported files in typescript
  // @see https://github.com/vercel/next.js/issues/12557#issuecomment-994278512
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /src\/.*\/index.tsx?/,
          sideEffects: false,
        },
      ],
    },
  }),
};

export default withBundleAnalyzer(withMDX(nextConfig));
