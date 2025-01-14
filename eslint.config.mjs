import babelParser from '@babel/eslint-parser';
//import googleConfig from 'eslint-config-google';
import globals from 'globals';
import eslintJs from '@eslint/js';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2023,
      },
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          configFile: './babel.config.json',
        },
      },
    },
  },
  {
    files: ['**/*.js'],
    rules: {
      ...eslintJs.configs.recommended.rules,
      //...googleConfig.rules,
      'semi': 'off',
      'comma-dangle': 'off',
      'require-jsdoc': 'off',
    },
  },
];
