import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export async function defineConfig(...args: Parameters<typeof antfu>) {
  const configs = await antfu(...args)

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
      'style/arrow-parens': 'off',
    },
  }

  return [
    ...configs,
    prettierConfig,
    eslintPluginPrettierRecommended,
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
