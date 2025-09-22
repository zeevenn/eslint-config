# @ziven/eslint-config-prettier

A perfect combination of ESLint and Prettier configuration.

## Why this configuration?

While ESLint can fix code errors and some formatting issues, it has limitations when handling code style aspects such as indentation, line length, and line breaks.

This configuration package integrates [@antfu/eslint-config](https://github.com/antfu/eslint-config) and Prettier.

## Usage

```bash
pnpm add -D @ziven/eslint-config-prettier
```

In your `eslint.config.mjs`:

```ts
import { defineConfig } from '@ziven/eslint-config-prettier'

// All options are the same as @antfu/eslint-config
export default defineConfig()
```
