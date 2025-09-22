import antfu from '@antfu/eslint-config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export async function defineConfig(...args: Parameters<typeof antfu>) {
  const configs = await antfu(...args)

  const prettierConfig = {
    rules: {
      'prettier/prettier': [
        'error',
        {},
        {
          usePrettierrc: true,
        },
      ],
    },
  }

  return [
    ...configs,
    prettierConfig,
    eslintPluginPrettierRecommended,
    {
      files: ['**/*.md'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ]
}

export default defineConfig
