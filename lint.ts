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
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
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

      // `curly: multi-or-nest` FORBIDS braces around a single-line,
      // non-nested body (auto-removing them) but REQUIRES them when the
      // body is multi-line or nested. So `if (m) {return foo(m[1])}`
      // is stripped to `if (m) return foo(m[1])`, while a multi-line
      // body keeps its braces.
      curly: ['error', 'multi-or-nest'],

      // Blank line between class members (methods / fields), except
      // after a single-line member, so tight one-liners can group.
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],

      // Breathing room at the natural seams of a block. Each entry
      // requires a blank line at that boundary (auto-fixable).
      'padding-line-between-statements': [
        'error',
        // separate the import block from the body
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        // keep same-kind declarations grouped, but put a blank line
        // between a `const` group and a `let` group (and vice versa)
        { blankLine: 'always', prev: 'const', next: 'let' },
        { blankLine: 'always', prev: 'let', next: 'const' },
        // a declaration that follows ordinary (expression) statements
        // starts a new group, so give it a blank line before it
        {
          blankLine: 'always',
          prev: 'expression',
          next: ['const', 'let'],
        },
        // and the mirror: ordinary statements that follow a declaration
        // group start a new group too, so a run of `const`s and the
        // `delete`s (or calls) after them are separated by a blank line
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: 'expression',
        },
        // a multi-line declaration (e.g. a function-bodied const)
        // gets a blank line after it
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: '*',
        },
        // breathing room BEFORE and AFTER a block-like statement
        // (if / for / while / switch / try)
        { blankLine: 'always', prev: 'block-like', next: '*' },
        { blankLine: 'always', prev: '*', next: 'block-like' },
        // around function and class declarations
        { blankLine: 'always', prev: '*', next: ['function', 'class'] },
        { blankLine: 'always', prev: ['function', 'class'], next: '*' },
        // before every `return`
        { blankLine: 'always', prev: '*', next: 'return' },
        // a blank line between consecutive multi-line expression
        // statements. In a test file each `it('...', () => { ... })`
        // (and each `describe`) is a multi-line expression, so this puts
        // one blank line between test cases, while single-line siblings
        // like consecutive `expect(...)` calls stay tight.
        {
          blankLine: 'always',
          prev: 'multiline-expression',
          next: 'multiline-expression',
        },
      ],
    },
  },
)
