import { config as eslintConfig } from '@febase/eslint-config-nextts';

const config = [
  ...eslintConfig,
  {
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },
];

export default config;
