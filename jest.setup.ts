/* eslint-disable max-classes-per-file, jest/require-hook */
import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import '@testing-library/jest-dom';

setGlobalConfig(globalStorybookConfig);

global.IntersectionObserver = class MockIntersectionObserver {
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly thresholds = [1];
  public observe = jest.fn();
  public unobserve = jest.fn();
  public disconnect = jest.fn();
  public takeRecords = jest.fn();
};

global.ResizeObserver = class MockResizeObserver {
  public observe = jest.fn();
  public unobserve = jest.fn();
  public disconnect = jest.fn();
};

global.matchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});
