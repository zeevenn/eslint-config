import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import { FlatConfigComposer } from 'eslint-flat-config-utils'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export const defaultPluginRenaming = {
  '@eslint-react': 'react',
  '@eslint-react/dom': 'react-dom',
  '@eslint-react/hooks-extra': 'react-hooks-extra',
  '@eslint-react/naming-convention': 'react-naming-convention',

  '@next/next': 'next',
  '@stylistic': 'style',
  '@typescript-eslint': 'ts',
  'import-lite': 'import',
  n: 'node',
  vitest: 'test',

  yml: 'yaml',
}

export async function defineConfig(...args: Parameters<typeof antfu>): Promise<Linter.Config<Linter.RulesRecord>[]> {
  const [options, ...userConfigs] = args
  const configs = await antfu(options, ...userConfigs)

  const prettierConfig: Linter.Config<Linter.RulesRecord> = {
    name: 'zeevenn/prettier',
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
      // conflict with prettier
      'antfu/if-newline': 'off',
    },
  }

  let prettierComposer = new FlatConfigComposer()
  prettierComposer = prettierComposer
    .append(prettierConfig, eslintPluginPrettierRecommended)
    .renamePlugins(defaultPluginRenaming)

  return [
    ...configs,
    ...(await prettierComposer),
    {
      name: 'zeevenn/md',
      files: ['**/*.md'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ]
}

export default defineConfig
