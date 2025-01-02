import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const textVariants = cva('font-sans text-textParagraph', {
  defaultVariants: {
    size: 'base',
  },
  variants: {
    size: {
      base: ['text-body'],
      extraLarge: ['text-bodyExtraLarge'],
      extraSmall: ['text-bodyExtraSmall'],
      large: ['text-bodyLarge'],
      small: ['text-bodySmall'],
      tableHeader: ['text-tableHeader'],
    },
  },
})

export type TextVariantsProps = ExcludeNull<VariantProps<typeof textVariants>>

export const text = (props: ClassProp & TextVariantsProps) =>
  cn(textVariants(props))
