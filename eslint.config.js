import { defineConfig } from 'eslint/config'
import config from './lint'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    extends: [config],
  },
])
