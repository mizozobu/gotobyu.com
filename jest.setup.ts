import { setGlobalConfig } from '@storybook/testing-react';
import * as globalStorybookConfig from './.storybook/preview';
import '@testing-library/jest-dom';

/* eslint-disable-next-line jest/require-hook */
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
