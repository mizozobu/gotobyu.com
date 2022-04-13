import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import { RecoilRoot } from 'recoil';
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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];
