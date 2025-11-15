import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));
const astroRecommended = eslintPluginAstro.configs['flat/recommended'] ?? [];
const tsRecommended = tseslint.configs.recommended ?? [];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      '*.config.cjs',
      '*.config.mjs',
    ],
  },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...(js.configs.recommended.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'error',
    },
  },
  ...tsRecommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...config.languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        ...(config.languageOptions?.parserOptions ?? {}),
        extraFileExtensions: ['.astro'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      ...(config.plugins ?? {}),
      import: importPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier: prettierPlugin,
    },
    settings: {
      ...(config.settings ?? {}),
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...(config.rules ?? {}),
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': [
        'error',
        {
          parser: 'typescript',
        },
      ],
    },
  })),
  ...astroRecommended.map((config) => {
    const astroFilePatterns = Array.isArray(config.files) ? config.files : [];
    const targetsRealAstroFiles = astroFilePatterns.some(
      (pattern) => pattern.includes('.astro') && !pattern.includes('.astro/')
    );

    return {
      ...config,
      languageOptions: {
        ...(config.languageOptions ?? {}),
        parserOptions: {
          ...(config.languageOptions?.parserOptions ?? {}),
          extraFileExtensions: ['.astro'],
          parser: tseslint.parser,
          tsconfigRootDir,
        },
      },
      plugins: {
        ...(config.plugins ?? {}),
        prettier: prettierPlugin,
      },
      rules: {
        ...(config.rules ?? {}),
        ...(targetsRealAstroFiles
          ? {
              'prettier/prettier': [
                'error',
                {
                  parser: 'astro',
                },
              ],
            }
          : {}),
      },
    };
  }),
  {
    name: 'prettier-overrides',
    rules: {
      ...(eslintConfigPrettier.rules ?? {}),
    },
  },
];
