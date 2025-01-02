import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const bannerVariants = cva(
  ['gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'],
  {
    defaultVariants: {
      kind: 'primary',
    },
    variants: {
      kind: {
        blue: ['bg-blue-50 text-blue-700'],
        gray: ['bg-gray-50 text-gray-600'],
        green: ['bg-green-50 text-green-700'],
        indigo: ['bg-indigo-50 text-indigo-700'],
        pink: ['bg-pink-50 text-pink-700'],
        primary: ['bg-brandPrimary text-textParagraphInverse'],
        purple: ['bg-purple-50 text-purple-700'],
        red: ['bg-red-50 text-red-700'],
        secondary: ['bg-brandSecondaryLt text-textParagraph'],
        yellow: ['bg-yellow-50 text-yellow-800'],
      },
    },
  },
)

export type BannerVariantsProps = ExcludeNull<
  VariantProps<typeof bannerVariants>
>

export const banner = (props: BannerVariantsProps & ClassProp) =>
  cn(bannerVariants(props))
