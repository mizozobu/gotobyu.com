import classnames from 'classnames';
import { pathsToModuleNameMapper } from 'ts-jest';
import * as tsConfigPaths from 'tsconfig-paths';

const { paths } = tsConfigPaths.loadConfig();

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  restoreMocks: true,
  moduleNameMapper: {
    // see https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
    ...pathsToModuleNameMapper(paths, {
      prefix: '<rootDir>/',
    }),
    // see https://jestjs.io/docs/webpack#mocking-css-modules
    '\\.css$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
    classNames: classnames,
  },
};
