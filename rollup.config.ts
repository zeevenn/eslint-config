import type { RollupOptions } from 'rollup'
import typescript from '@rollup/plugin-typescript'

const config: RollupOptions = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  external: ['@antfu/eslint-config', 'eslint-plugin-prettier/recommended'],
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
      include: ['src/**/*'],
    }),
  ],
}

export default config
