import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

// `tsconfigRootDir` must resolve to the CONSUMER's project
// root, not this package's own folder inside node_modules.
// `process.cwd()` points `projectService` at the directory
// where `eslint` was invoked. Setting it to `__dirname` was a
// bug: it resolved to `node_modules/@cluesurf/wash`, making
// every symbol in the consumer's code fall back to `any` and
// triggering `no-unsafe-member-access` on every property access.

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  {
    rules: {
      // `any` is tolerated. Real types are preferred when
      // practical; `any` is fine at boundaries where the
      // shape is genuinely unknown.
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unsafe-function-type': 'warn',

      // `type X = {}`, never `interface X {}`. House style.
      '@typescript-eslint/consistent-type-definitions': [
        'error',
        'type',
      ],

      // `Type[]` over `Array<Type>`. House style.
      '@typescript-eslint/array-type': ['error', { default: 'array' }],

      // `_`-prefixed unused vars / args / catch errors are
      // intentional ignores.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // `var` is never the answer; `const` is preferred.
      'no-var': 'error',
      'prefer-const': 'warn',

      // Empty catch blocks are sometimes load-bearing
      // (silently fall back to defaults).
      'no-empty': ['warn', { allowEmptyCatch: true }],

      // Throwing structured error sentinels (e.g. `throw kink`
      // from @cluesurf/kink) is the project convention.
      '@typescript-eslint/only-throw-error': 'off',

      // `require` is allowed in CommonJS shims and bin files.
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
)
