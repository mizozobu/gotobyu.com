// @ts-check
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';
import jest from 'eslint-plugin-jest';
import jestdom from 'eslint-plugin-jest-dom';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const flatCompat = new FlatCompat();

const forJSX = (config) => ({
  ...config,
  files: ['**/*.jsx', '**/*.tsx'],
});
const forTS = (config) => ({
  ...config,
  files: ['**/*.ts', '**/*.tsx'],
});
const forStorybook = (config) => ({
  ...config,
  files: ['**/*.stories.jsx', '**/*.stories.tsx'],
});
const forTest = (config) => ({
  ...config,
  files: [
    'src/**/*.spec.js',
    'src/**/*.spec.ts',
    'src/**/*.spec.jsx',
    'src/**/*.spec.tsx',
    'jest.*',
  ],
});
const forE2E = (config) => ({
  ...config,
  files: ['e2e/**/*.js', 'e2e/**/*.ts', 'playwright.config.ts'],
});

export default tseslint.config(
  ...fixupConfigRules(flatCompat.extends('airbnb-base')),
  {
    ignores: ['.next', '.storybook-static', 'test-results'],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2023,
      },
    },
    rules: {
      // allow not using positional arguments before the last used argument
      'no-unused-vars': [
        'warn',
        { args: 'after-used', ignoreRestSiblings: true },
      ],

      // allow class properties with no blank line inbetween
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],

      // allow voiding floating promise
      'no-void': ['error', { allowAsStatement: true }],

      // allow instance method without "this"
      'class-methods-use-this': 'off',
    },
  },

  /**
   * JSX
   */
  ...fixupConfigRules(flatCompat.extends('airbnb')).map(forJSX),
  ...fixupConfigRules(flatCompat.extends('airbnb/hooks')).map(forJSX),
  ...fixupConfigRules(
    flatCompat.extends('plugin:@next/next/core-web-vitals'),
  ).map(forJSX),
  forJSX({
    rules: {
      // hush no-use-before-define error in "import React from 'react';"
      // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],

      // enforce .client.tsx naming for client components
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/^use client$/]',
          message: 'Rename the file to *.client.tsx to use "use client".',
        },
      ],

      // allow jsx in .tsx
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],

      // nextjs does not need React in every file
      'react/react-in-jsx-scope': 'off',

      // use this pattern for default props
      //
      // interface Props {
      //   prop1?: boolean;
      // }
      // const Component1 = ({ prop1 = false }: Props) => (
      //   <Component1 prop1={prop1} />
      // );
      'react/require-default-props': 'off',

      // allow <App {...props} />
      'react/jsx-props-no-spreading': 'off',

      // enforce arrow function for functional components
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],

      // use <Link> instead of <a> for links
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton'],
        },
      ],
    },
  }),

  /**
   * client components
   */
  {
    files: ['**/*.client.jsx', '**/*.client.tsx'],
    rules: {
      'no-restricted-syntax': 'off',
    },
  },

  /**
   * typescript
   * - must come after jsx to turn off airbnb rules conflicted with typescript
   */
  ...tseslint.configs.recommendedTypeChecked.map(forTS),
  forTS({
    languageOptions: {
      parserOptions: {
        project: './tsconfig.base.json',
        // TODO: use import.meta.dirname for Node >20.11
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.base.json',
        },
      },
    },
    rules: {
      // allow empty interface (for React props)
      '@typescript-eslint/no-empty-interface': 'off',

      // allow not using positional arguments before the last used argument
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { args: 'after-used', ignoreRestSiblings: true },
      ],

      // allow typescript constructor parameter properties
      // see https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
      // e.g. constructor(private readonly xxxx: string) {}
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],

      // require return type
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],

      // allow class properties with no blank line inbetween
      'lines-between-class-members': 'off',
      '@typescript-eslint/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true, exceptAfterOverload: true },
      ],

      // type must be imported as type
      '@typescript-eslint/consistent-type-imports': 'error',

      // require public/private/protected
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          ignoredMethodNames: ['render'],
          overrides: {
            constructors: 'no-public',
          },
        },
      ],

      // allow async event handler
      '@typescript-eslint/no-misused-promises': 'off',

      // use typecript-eslint feature instead as recommended
      'import/no-unresolved': 'off',
    },
  }),

  /**
   * storybook
   */
  ...fixupConfigRules(flatCompat.extends('plugin:storybook/recommended')).map(
    forStorybook,
  ),
  forStorybook({
    rules: {
      // allow importing storybooks from devDependencies
      // see https://github.com/storybookjs/storybook/issues/1992#issuecomment-335001056
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.stories.jsx',
            '**/*.stories.tsx',
            '.storybook/**',
          ],
        },
      ],
    },
  }),

  /**
   * jest
   */
  forTest(jest.configs['flat/all']),
  forTest(jestdom.configs['flat/recommended']),
  ...fixupConfigRules(flatCompat.extends('plugin:testing-library/react')),
  forTest({
    rules: {
      // allow obj['key'] to access private property
      'dot-notation': 'off',

      // allow importing devDependencies in tests
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.spec.js',
            '**/*.spec.ts',
            '**/*.spec.jsx',
            '**/*.spec.tsx',
            'jest.*',
          ],
        },
      ],

      // allow beforeAll, beforeEach, afterAll, and afterEach
      'jest/no-hooks': 'off',

      // allow upper case at the first charactor of describe, it, ...
      'jest/prefer-lowercase-title': 'off',

      // allow unlimited expects per test
      'jest/max-expects': 'off',

      // use globally injected describe, it, ...
      'jest/prefer-importing-jest-globals': 'off',
    },
  }),

  /**
   * playwright
   */
  forE2E(playwright.configs['flat/recommended']),
  forE2E({
    rules: {
      // allow importing devDependencies in tests
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'e2e/**/*.js',
            'e2e/**/*.ts',
            'playwright.config.ts',
          ],
        },
      ],
    },
  }),

  /**
   * all
   * - turn off rules conflicted with prettier for all files
   * - add custom rules at last to make sure they aren't overridden
   */
  prettier,
  {
    rules: {
      // allow _ in variable
      'no-underscore-dangle': 'off',

      // allow named exports without default export
      'import/prefer-default-export': 'off',

      // sort imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // omit .ts .tsx in import statement
      // see https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
          json: 'never',
        },
      ],
    },
  },
);
