<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@cluesurf/form-code</h3>
<p align='center'>
  Lint and Format Code Style for ClueSurf Projets
</p>

<br/>
<br/>
<br/>

## Installation

```
pnpm add @cluesurf/form-code
yarn add @cluesurf/form-code
npm i @cluesurf/form-code
```

## Usage

Add default vscode settings/extensions:

```bash
npx @cluesurf/form-code
```

Use ClueSurf styled eslint config:

```ts
// eslint.config.ts
import config from '@cluesurf/form-code/lint'
import { defineConfig } from 'eslint/config'

export default defineConfig([...config])
```

Use ClueSurf styled prettier config, add this to `package.json`:

```json
{
  "prettier": "@cluesurf/form-code/love.json"
}
```

## License

MIT

## ClueSurf

This is being developed by the folks at [ClueSurf](https://clue.surf), a
California-based project for helping humanity master information and
computation. ClueSurf started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. Also find us on
[Facebook](https://www.facebook.com/cluesurf),
[X](https://x.com/cluesurf), and
[LinkedIn](https://www.linkedin.com/company/cluesurf). Check out our
other GitHub projects as well!
