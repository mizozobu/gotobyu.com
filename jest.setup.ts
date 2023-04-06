/* eslint-disable max-classes-per-file, jest/require-hook */
import { jest } from '@jest/globals';
import { setProjectAnnotations } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import '@testing-library/jest-dom';

setProjectAnnotations(globalStorybookConfig);

global.IntersectionObserver = class MockIntersectionObserver
  implements IntersectionObserver
{
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly thresholds = [1];
  public disconnect = jest.fn<MockIntersectionObserver['disconnect']>();
  public observe = jest.fn<MockIntersectionObserver['observe']>();
  public takeRecords = jest.fn<MockIntersectionObserver['takeRecords']>();
  public unobserve = jest.fn<MockIntersectionObserver['unobserve']>();
};

global.ResizeObserver = class MockResizeObserver implements ResizeObserver {
  public observe = jest.fn<MockResizeObserver['observe']>();
  public disconnect = jest.fn<MockResizeObserver['disconnect']>();
  public unobserve = jest.fn<MockResizeObserver['unobserve']>();
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
