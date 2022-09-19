import nextJest from 'next/jest';
import { pathsToModuleNameMapper, type InitialOptionsTsJest } from 'ts-jest';
import { loadConfig, type ConfigLoaderSuccessResult } from 'tsconfig-paths';
import { getRoutes } from './.storybook/utils/get-routes';

const jestConfig: InitialOptionsTsJest = {
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
  globals: {
    isSecureContext: true,
    __NEXT_ROUTES__: getRoutes(),
    'ts-jest': {},
  },
};

export default nextJest({
  dir: './',
})(jestConfig);
