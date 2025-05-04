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
      '@stylistic/eslint-plugin': require('@stylistic/eslint-plugin'),
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
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      '@stylistic/eslint-plugin/no-unnecessary-condition': 0,
      '@stylistic/eslint-plugin/array-type': [
        2,
        { default: 'generic' },
      ],
      'react/display-name': 'off',
      '@stylistic/eslint-plugin/await-thenable': 'error',
      '@stylistic/eslint-plugin/consistent-type-definitions': 0,
      '@stylistic/eslint-plugin/consistent-type-exports': 'error',
      '@stylistic/eslint-plugin/method-signature-style': 'error',
      '@stylistic/eslint-plugin/naming-convention': 0,
      '@stylistic/eslint-plugin/no-explicit-any': 'off',
      '@stylistic/eslint-plugin/no-for-in-array': 'error',
      '@stylistic/eslint-plugin/no-namespace': 0,
      '@stylistic/eslint-plugin/no-non-null-assertion': 'off',
      '@stylistic/eslint-plugin/no-require-imports': 'error',
      '@stylistic/eslint-plugin/no-this-alias': 'error',
      '@stylistic/eslint-plugin/no-unsafe-argument': 'off',
      '@stylistic/eslint-plugin/no-unsafe-assignment': 'off',
      '@stylistic/eslint-plugin/no-unsafe-member-access': 'off',
      '@stylistic/eslint-plugin/no-unsafe-return': 'off',
      '@stylistic/eslint-plugin/no-useless-empty-export': 'error',
      '@stylistic/eslint-plugin/prefer-function-type': 'error',
      'no-array-constructor': 'off',
      '@stylistic/eslint-plugin/no-array-constructor': 'error',
      'no-throw-literal': 'off',
      '@stylistic/eslint-plugin/no-throw-literal': 'error',
      'lines-between-class-members': 'off',
      '@stylistic/eslint-plugin/lines-between-class-members': 'error',
      'object-curly-spacing': 'off',
      '@stylistic/eslint-plugin/object-curly-spacing': [2, 'always'],
      'padding-line-between-statements': 'off',
      '@stylistic/eslint-plugin/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['type'],
        },
      ],
      'space-before-blocks': 'off',
      '@stylistic/eslint-plugin/space-before-blocks': [
        'error',
        'always',
      ],
      '@stylistic/eslint-plugin/type-annotation-spacing': [
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
      '@stylistic/eslint-plugin/no-unused-vars': 'off',
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
