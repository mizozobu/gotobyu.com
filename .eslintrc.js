module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // allow voiding floating promise
    'no-void': ['error', { allowAsStatement: true }],

    // hush no-use-before-define error in "import React from 'react';"
    // see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // allow empty interface (for React props)
    '@typescript-eslint/no-empty-interface': 'off',

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
      },
    ],

    // allow named exports without default export
    'import/prefer-default-export': 'off',

    // allow importing storybooks from devDependencies
    // see https://github.com/storybookjs/storybook/issues/1992#issuecomment-335001056
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.tsx'],
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
    // const Component1: FC<Props> = ({ prop1 = false }: Props) => (
    //   <Component1 prop1={prop1} />
    // );
    'react/require-default-props': 'off',

    // allow <App {...props} />
    'react/jsx-props-no-spreading': 'off',

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
  overrides: [
    {
      files: ['src/**/*.stories.tsx'],
      rules: {
        'no-alert': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
