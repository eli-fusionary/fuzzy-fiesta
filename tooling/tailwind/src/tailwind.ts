import type { Config } from 'tailwindcss'
import ContainerQueries from '@tailwindcss/container-queries'

import { colors } from './colors'
import { fontFamily, fontSize } from './typography'
import { borderRadius, spacing } from './ui'

export const ExtendedConfig = {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  spacing,
}

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [ContainerQueries],
  theme: {
    extend: {
      ...ExtendedConfig,
    },
  },
} as const satisfies Config
