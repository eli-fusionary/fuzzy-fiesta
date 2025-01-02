import { default as base } from '@local/eslint-config'

const config = [
  ...base,
  {
    name: 'Ignore Process.env',
    rules: {
      'no-process-env': 'off',
    },
  },
]

export default config
