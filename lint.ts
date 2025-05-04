import type { Linter } from 'eslint'

const config: Linter.Config[] = [
  {
    files: ['**/*.{js,ts,tsx}'], // you can adjust to your needs
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      import: require('eslint-plugin-import'),
      'simple-import-sort': require('eslint-plugin-simple-import-sort'),
      'sort-exports': require('eslint-plugin-sort-exports'),
      // 'typescript-sort-keys': require('eslint-plugin-typescript-sort-keys'),
      // 'sort-keys': require('eslint-plugin-sort-keys-fix'),
      prettier: require('eslint-plugin-prettier'),
      'unused-imports': require('eslint-plugin-unused-imports'),
    },
    rules: {
      curly: 2,
      '@typescript-eslint/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/array-type': [2, { default: 'generic' }],
      'react/display-name': 'off',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-definitions': 0,
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/naming-convention': 0,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': 'error',
      'lines-between-class-members': 'off',
      '@typescript-eslint/lines-between-class-members': 'error',
      'object-curly-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': [2, 'always'],
      'padding-line-between-statements': 'off',
      '@typescript-eslint/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['type'],
        },
      ],
      'space-before-blocks': 'off',
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      '@typescript-eslint/type-annotation-spacing': [
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
      '@typescript-eslint/no-unused-vars': 'off',
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
