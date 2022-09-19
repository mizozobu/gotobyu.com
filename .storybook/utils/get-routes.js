const { resolve } = require('path');
const glob = require('glob');
const {
  absolutePathToPage,
} = require('next/dist/shared/lib/page-path/absolute-path-to-page');
const { getSortedRoutes } = require('next/dist/shared/lib/router/utils');

/** Next.js pages directory */
const pagesDir = resolve(__dirname, '..', '..', 'src', 'pages');

/** Return sorted routes */
const getRoutes = () =>
  getSortedRoutes(
    glob.sync(resolve(pagesDir, '**/*.@(js|jsx|ts|tsx)')).map((page) =>
      absolutePathToPage(page, {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        keepIndex: false,
        pagesDir,
      }),
    ),
  );

module.exports = { getRoutes };
