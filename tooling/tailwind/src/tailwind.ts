import type { Config } from 'tailwindcss'
import ContainerQueries from '@tailwindcss/container-queries'
import TailwindCSSAnimate from 'tailwindcss-animate'

import { animationDuration } from './animationDuration'
import { animation } from './animations'
import { colors } from './colors'
import { keyframes } from './keyframes'
import { fontFamily, fontSize } from './typography'
import { borderRadius, spacing } from './ui'

export const ExtendedConfig = {
  animation,
  animationDuration,
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  keyframes,
  spacing,
}

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [ContainerQueries, TailwindCSSAnimate],
  theme: {
    extend: {
      ...ExtendedConfig,
    },
  },
} as const satisfies Config
