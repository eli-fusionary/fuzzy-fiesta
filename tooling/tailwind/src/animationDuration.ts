import type { ThemeConfig } from './types'

// This is a config for the plugin tailwindcss/animation, not Tailwindcss
type ExtendedTailwindConfig = {
  animationDuration: Record<string, string>
} & ThemeConfig

// Animations should be between .25s  - .5s but when you need a longer one you can put it here
export const animationDuration: ExtendedTailwindConfig['animationDuration'] = {
  '2s': '2s',
}
