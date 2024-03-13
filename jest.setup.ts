/* eslint-disable max-classes-per-file, jest/require-hook */
import { TextEncoder, TextDecoder } from 'node:util';
import { jest } from '@jest/globals';
import { setProjectAnnotations } from '@storybook/react';
import Image from 'next/image';
import globalStorybookConfig from './.storybook/preview';
import '@testing-library/jest-dom';

setProjectAnnotations(globalStorybookConfig);

// HACK:
// since next 13.5 `(<Image />).type` is `{ unstable_getImgProps: [Getter], default: [Getter] }`
// where `Image` is expected
jest.unstable_mockModule('next/image', () => Image);

global.IntersectionObserver = class MockIntersectionObserver
  implements IntersectionObserver
{
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly thresholds = [1];
  public disconnect = jest.fn<IntersectionObserver['disconnect']>();
  public observe = jest.fn<IntersectionObserver['observe']>();
  public takeRecords = jest.fn<IntersectionObserver['takeRecords']>();
  public unobserve = jest.fn<IntersectionObserver['unobserve']>();
};

global.ResizeObserver = class MockResizeObserver implements ResizeObserver {
  public observe = jest.fn<ResizeObserver['observe']>();
  public disconnect = jest.fn<ResizeObserver['disconnect']>();
  public unobserve = jest.fn<ResizeObserver['unobserve']>();
};

global.matchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn<MediaQueryList['addListener']>(),
  removeListener: jest.fn<MediaQueryList['removeListener']>(),
  addEventListener: jest.fn<MediaQueryList['addEventListener']>(),
  removeEventListener: jest.fn<MediaQueryList['removeEventListener']>(),
  dispatchEvent: jest.fn<MediaQueryList['dispatchEvent']>(),
});

// see https://github.com/jsdom/jsdom/issues/2524#issuecomment-736672511
global.TextEncoder = TextEncoder;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.TextDecoder = TextDecoder;
