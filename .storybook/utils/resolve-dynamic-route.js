const {
  denormalizePagePath,
} = require('next/dist/shared/lib/page-path/denormalize-page-path');
const { isDynamicRoute } = require('next/dist/shared/lib/router/utils');
const {
  removeTrailingSlash,
} = require('next/dist/shared/lib/router/utils/remove-trailing-slash');
const {
  getRouteRegex,
} = require('next/dist/shared/lib/router/utils/route-regex');

/**
 * Resolve URL to Next.js pathname
 * @see resolveDynamicRoute in {@link next/dist/shared/lib/router/router}
 * @param {string} pathname URL w/ params filled
 * @param {string[]} pages Array of pages w/o params filled
 * @returns Next.js pathname
 */
function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = removeTrailingSlash(denormalizePagePath(pathname));
  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  }

  // handle resolving href for dynamic routes
  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some((page) => {
      if (isDynamicRoute(page) && getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }
  return removeTrailingSlash(pathname);
}

module.exports = { resolveDynamicRoute };
