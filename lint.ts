import type { Linter } from 'eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import importPlugin from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sortExports from 'eslint-plugin-sort-exports'
import prettier from 'eslint-plugin-prettier'
import unusedImports from 'eslint-plugin-unused-imports'
import tsParser from '@typescript-eslint/parser'

const config: Linter.Config[] = [
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'sort-exports': sortExports,
      prettier: prettier,
      'unused-imports': unusedImports,
    },
    rules: {
      // Basic rules
      curly: 2,
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],

      // JavaScript stylistic rules (use @stylistic/js prefix)
      '@stylistic/js/object-curly-spacing': [2, 'always'],
      '@stylistic/js/lines-between-class-members': 'error',
      '@stylistic/js/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['type'],
        },
      ],
      '@stylistic/js/space-before-blocks': ['error', 'always'],

      // TypeScript stylistic rules (use @stylistic/ts prefix)
      '@stylistic/ts/type-annotation-spacing': [
        'error',
        { after: true },
      ],
      '@stylistic/ts/array-type': [2, { default: 'generic' }],
      '@stylistic/ts/await-thenable': 'error',
      '@stylistic/ts/consistent-type-definitions': 0,
      '@stylistic/ts/consistent-type-exports': 'error',
      '@stylistic/ts/method-signature-style': 'error',
      '@stylistic/ts/naming-convention': 0,
      '@stylistic/ts/no-explicit-any': 'off',
      '@stylistic/ts/no-for-in-array': 'error',
      '@stylistic/ts/no-namespace': 0,
      '@stylistic/ts/no-non-null-assertion': 'off',
      '@stylistic/ts/no-require-imports': 'error',
      '@stylistic/ts/no-this-alias': 'error',
      '@stylistic/ts/no-unsafe-argument': 'off',
      '@stylistic/ts/no-unsafe-assignment': 'off',
      '@stylistic/ts/no-unsafe-member-access': 'off',
      '@stylistic/ts/no-unsafe-return': 'off',
      '@stylistic/ts/no-useless-empty-export': 'error',
      '@stylistic/ts/prefer-function-type': 'error',

      // Other rules
      'import/no-duplicates': 'error',
      'sort-exports/sort-exports': 'off',
      'typescript-sort-keys/interface': 'off',
      'typescript-sort-keys/string-enum': 'off',
      'sort-keys': 'off',
      'sort-keys/sort-keys-fix': 'off',
      'prettier/prettier': 2,
      'default-case': 'off',
      'default-case-last': 'off',
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': [
        'off',
        {
          groups: [
            ['^react$', '^next', '^[a-z]'],
            ['^@'],
            ['^~'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{yaml,yml}'],
    languageOptions: {
      parser: require('yaml-eslint-parser'),
    },
    rules: {},
  },
]

export default config
