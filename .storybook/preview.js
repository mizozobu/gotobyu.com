import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import { resolveHref } from 'next/dist/shared/lib/router/router';
import { useState } from 'react';
import { resolveDynamicRoute } from './utils/resolve-dynamic-route';
import '../src/styles/globals.css';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    stylePreview: true,
    current: 'dark',
    darkClass: 'dark',
    classTarget: 'html',
  },
};

export const decorators = [
  (
    Story,
    {
      parameters: {
        nextRouter: { pathname: _pathname, ...rest } = { pathname: '/' },
      },
    },
  ) => {
    const [pathname, setPathname] = useState(_pathname);

    return (
      // HACK: storybook-addon-next-router does not work with @testing-library/react
      // since there's no way for jest to import src/.storybook/main.js.
      // see https://github.com/vercel/next.js/issues/16864#issuecomment-734333738
      <RouterContext.Provider
        value={{
          basePath: '',
          pathname,
          route: '/',
          asPath: '/',
          query: {},
          push: (url) => {
            const [, resolvedAs] = resolveHref({}, url, true);
            if (process.env.NODE_ENV === 'test') {
              /**
               * HACK: Update window.location
               * @see https://github.com/jsdom/jsdom/issues/2112#issuecomment-463726677
               */
              window.history.pushState({}, '', resolvedAs);
            }
            setPathname(
              resolveDynamicRoute(resolvedAs, window.__NEXT_ROUTES__),
            );
            Promise.resolve(true);
          },
          replace: (url) => {
            const [, resolvedAs] = resolveHref({}, url, true);
            if (process.env.NODE_ENV === 'test') {
              window.history.replaceState({}, '', resolvedAs);
            }
            setPathname(
              resolveDynamicRoute(resolvedAs, window.__NEXT_ROUTES__),
            );
            Promise.resolve(true);
          },
          reload: () => {},
          back: () => {},
          prefetch: () => Promise.resolve(),
          beforePopState: () => {},
          events: {
            on: () => Promise.resolve(),
            off: () => Promise.resolve(),
            emit: () => Promise.resolve(),
          },
          isFallback: false,
          ...rest,
        }}
      >
        <Story />
      </RouterContext.Provider>
    );
  },
];
