/**
 * custom loader to use tsconfig-paths in esm
 * https://github.com/TypeStrong/ts-node/discussions/1450#discussioncomment-1806115
 */
import { extname } from 'path';
import { pathToFileURL } from 'url';
import { resolve as resolveTs } from 'ts-node/esm';
import * as tsConfigPaths from 'tsconfig-paths';

const { absoluteBaseUrl, paths } = tsConfigPaths.loadConfig();
const matchPath = tsConfigPaths.createMatchPath(absoluteBaseUrl, paths);

export function resolve(specifier, ctx, defaultResolve) {
  // workaround to hush errors for static imported images in next.js
  if (
    [
      '.png',
      '.svg',
      '.jpg',
      '.jpeg',
      '.gif',
      '.webp',
      '.avif',
      '.ico',
      '.bmp',
    ].includes(extname(specifier))
  ) {
    return resolveTs('identity-obj-proxy', ctx, defaultResolve);
  }

  const match = matchPath(specifier);
  return match
    ? resolveTs(pathToFileURL(`${match}`).href, ctx, defaultResolve)
    : resolveTs(specifier, ctx, defaultResolve);
}

export { load, transformSource } from 'ts-node/esm';
