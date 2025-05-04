import type { Linter } from 'eslint'

const config: Linter.Config[] = [
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@stylistic': require('@stylistic/eslint-plugin'), // Changed
      import: require('eslint-plugin-import'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
      'sort-exports': require('eslint-plugin-sort-exports'),
      prettier: require('eslint-plugin-prettier'),
      'unused-imports': require('eslint-plugin-unused-imports'),
    },
    rules: {
      curly: 2,
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      '@stylistic/no-unnecessary-condition': 0, // Changed
      '@stylistic/array-type': [2, { default: 'generic' }],
      'react/display-name': 'off',
      '@stylistic/await-thenable': 'error', // Changed
      '@stylistic/consistent-type-definitions': 0, // Changed
      '@stylistic/consistent-type-exports': 'error', // Changed
      '@stylistic/method-signature-style': 'error', // Changed
      '@stylistic/naming-convention': 0, // Changed
      '@stylistic/no-explicit-any': 'off', // Changed
      '@stylistic/no-for-in-array': 'error', // Changed
      '@stylistic/no-namespace': 0, // Changed
      '@stylistic/no-non-null-assertion': 'off', // Changed
      '@stylistic/no-require-imports': 'error', // Changed
      '@stylistic/no-this-alias': 'error', // Changed
      '@stylistic/no-unsafe-argument': 'off', // Changed
      '@stylistic/no-unsafe-assignment': 'off', // Changed
      '@stylistic/no-unsafe-member-access': 'off', // Changed
      '@stylistic/no-unsafe-return': 'off', // Changed
      '@stylistic/no-useless-empty-export': 'error', // Changed
      '@stylistic/prefer-function-type': 'error', // Changed
      'no-array-constructor': 'off',
      '@stylistic/no-array-constructor': 'error', // Changed
      'no-throw-literal': 'off',
      '@stylistic/no-throw-literal': 'error', // Changed
      'lines-between-class-members': 'off',
      '@stylistic/lines-between-class-members': 'error', // Changed
      'object-curly-spacing': 'off',
      '@stylistic/object-curly-spacing': [2, 'always'], // Changed
      'padding-line-between-statements': 'off',
      '@stylistic/padding-line-between-statements': [
        // Changed
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['type'],
        },
      ],
      'space-before-blocks': 'off',
      '@stylistic/space-before-blocks': [
        // Changed
        'error',
        'always',
      ],
      '@stylistic/type-annotation-spacing': [
        // Changed
        'error',
        { after: true },
      ],
      'import/no-duplicates': 'error',
      'sort-exports/sort-exports': 'off',
      'typescript-sort-keys/interface': 'off',
      'typescript-sort-keys/string-enum': 'off',
      'sort-keys': 'off',
      'sort-keys/sort-keys-fix': 'off',
      'prettier/prettier': 2,
      '@stylistic/no-unused-vars': 'off', // Changed
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
