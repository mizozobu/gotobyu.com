import nextJest from 'next/jest';
import { pathsToModuleNameMapper, type JestConfigWithTsJest } from 'ts-jest';
import { loadConfig, type ConfigLoaderSuccessResult } from 'tsconfig-paths';

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  restoreMocks: true,
  // see https://kulshekhar.github.io/ts-jest/docs/getting-started/paths-mapping/
  moduleNameMapper: pathsToModuleNameMapper(
    (loadConfig() as ConfigLoaderSuccessResult).paths,
    {
      prefix: '<rootDir>/',
    },
  ),
  transform: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    isSecureContext: true,
    'ts-jest': {},
  },
};

export default nextJest({
  dir: './',
})(jestConfig);
