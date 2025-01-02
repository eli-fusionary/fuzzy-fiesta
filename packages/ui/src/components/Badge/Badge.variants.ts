import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const badgeVariants = cva(
  'relative inline-flex size-fit items-center text-nowrap px-2 py-1 text-xs font-medium',
  {
    defaultVariants: {
      kind: 'primary',
      shape: 'roundedRectangle',
    },
    variants: {
      kind: {
        blue: ['bg-blue-50 text-blue-700 ring-blue-700/10'],
        gray1: ['bg-grey1 text-grey6 ring-grey6'],
        gray2: ['bg-grey2 text-grey6 ring-grey6'],
        green: ['bg-green-50 text-green-600 ring-green-600/20'],
        indigo: ['bg-indigo-50 text-indigo-700 ring-indigo-700/10'],
        pink: ['bg-pink-50 text-pink-700 ring-pink-700/10'],
        primary: ['bg-brandPrimaryLt text-textParagraph ring-brandPrimaryDk'],
        purple: ['bg-purple-50 text-purple-700 ring-purple-700/10'],
        red: ['bg-red-50 text-red-600 ring-red-600/20'],
        secondary: [
          'bg-brandSecondaryLt text-textParagraph ring-brandSecondaryDk',
        ],
        yellow: ['bg-yellow-50 text-yellow-800 ring-yellow-600/20'],
      },
      ring: {
        inset: ['ring-1 ring-inset'],
        none: [' '],
      },
      shape: {
        asymmetricalRibbon: ['asymmetrical-ribbon pl-4 pr-6'],
        circle: ['rounded-full'],
        rectangle: ['rounded-none'],
        ribbon: ['ribbon px-6'],
        roundedRectangle: ['rounded'],
      },
    },
  },
)

export type BadgeVariantsProps = ExcludeNull<VariantProps<typeof badgeVariants>>

export const badge = (props: BadgeVariantsProps & ClassProp): string =>
  cn(badgeVariants(props))
