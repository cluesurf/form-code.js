import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

// The declaration / definition statement kinds that get a blank line on
// BOTH sides in `padding-line-between-statements`. A run of the SAME kind
// stays grouped (the `any` exceptions in the rule below). Hoisted to
// module scope so the two rule entries that use it cannot drift apart.
const DECLARATION_KINDS = [
  'const',
  'let',
  'var',
  'type',
  'interface',
  'enum',
  'function',
  'class',
]

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

      // Blank-line discipline between statements. The goal: a run of the
      // SAME kind of declaration groups tightly, but any CHANGE of kind
      // (and every block / control-flow seam) is set off by exactly one
      // blank line. The list of declaration kinds is defined once above
      // as DECLARATION_KINDS. Uses the typescript-eslint variant so
      // `type` / `interface` / `enum` are first-class selectors, not just
      // an untyped `*`. `padding-line-between-statements` (matching the
      // LAST applicable rule for a pair) means the same-kind "any"
      // exceptions must come AFTER the broad "always" rules. All of this
      // is auto-fixable.
      'padding-line-between-statements': 'off',
      '@typescript-eslint/padding-line-between-statements': [
        'error',
        // the import block is separated from the body; imports stay tight
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        // every declaration / definition gets a blank line on BOTH sides,
        // so a `type` and the `const` after it (or a `const` group and the
        // `delete`s after it) are always separated
        { blankLine: 'always', prev: '*', next: DECLARATION_KINDS },
        { blankLine: 'always', prev: DECLARATION_KINDS, next: '*' },
        // ...except a run of the SAME kind groups without blank lines
        { blankLine: 'any', prev: 'const', next: 'const' },
        { blankLine: 'any', prev: 'let', next: 'let' },
        { blankLine: 'any', prev: 'var', next: 'var' },
        { blankLine: 'any', prev: 'type', next: 'type' },
        { blankLine: 'any', prev: 'interface', next: 'interface' },
        // block-like statements (if / for / while / do / switch / try)
        // get a blank line before and after
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        // a control-flow exit is set off by a blank line before it
        { blankLine: 'always', prev: '*', next: ['return', 'throw'] },
        // consecutive MULTI-LINE expression statements are separated (e.g.
        // `it('...', () => { ... })` test blocks), while single-line
        // siblings like consecutive `expect(...)` calls stay tight
        {
          blankLine: 'always',
          prev: 'multiline-expression',
          next: 'multiline-expression',
        },
      ],
    },
  },
)
