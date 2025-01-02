import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const linkVariants = cva(['cursor-pointer font-bold'], {
  defaultVariants: {
    kind: 'primary',
    size: 'base',
  },
  variants: {
    kind: {
      primary: ['text-textLink hover:text-textLinkHover'],
      secondary: ['text-textLinkSecondary hover:text-textLinkHoverSecondary'],
      tertiary: ['text-textLinkTertiary hover:text-textLinkHoverTertiary'],
    },
    size: {
      base: ['text-[1rem] leading-[130%]', 'tracking-[-0.048px]'],
      extraSmall: ['text-[0.75rem] leading-[140%]', 'tracking-[-0.036px]'],
      large: ['text-[1.125rem] leading-[140%]', 'tracking-normal'],
      small: ['text-[0.875rem] leading-[140%]', 'tracking-[-0.042px]'],
    },
  },
})

export type LinkVariantsProps = ExcludeNull<VariantProps<typeof linkVariants>>

export const link = (props: ClassProp & LinkVariantsProps) =>
  cn(linkVariants(props))
