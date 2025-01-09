import type { ThemeConfig } from './types'

export const keyframes: ThemeConfig['keyframes'] = {
  slideLeftToRight: {
    from: {
      transform: `translateX(-100%)`,
    },
    to: {
      transform: `translateX(300%)`,
    },
  },
}
