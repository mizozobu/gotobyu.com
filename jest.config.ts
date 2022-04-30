import nextJest from 'next/jest';
import { pathsToModuleNameMapper, type InitialOptionsTsJest } from 'ts-jest';
import { loadConfig, type ConfigLoaderSuccessResult } from 'tsconfig-paths';

const jestConfig: InitialOptionsTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  restoreMocks: true,
  // see https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
  moduleNameMapper: pathsToModuleNameMapper(
    (loadConfig() as ConfigLoaderSuccessResult).paths,
    {
      prefix: '<rootDir>/',
    },
  ),
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};

export default nextJest({
  dir: './',
})(jestConfig);
