import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const headingVariants = cva(['text-textHeadline', 'font-serif'], {
  defaultVariants: {
    display: 'h1',
  },
  variants: {
    display: {
      base: ['text-headline'],
      h1: ['text-headlineH1'],
      h2: ['text-headlineH2'],
      h3: ['text-headlineH3'],
      h4: ['text-headlineH4'],
      h5: ['text-headlineH5'],
      h6: ['text-headlineH6'],
      small: ['text-headlineSmall'],
      table: ['text-tableHeader'],
    },
  },
})

export type HeadingVariantsProps = ExcludeNull<
  VariantProps<typeof headingVariants>
>

export const heading = (props: ClassProp & HeadingVariantsProps) =>
  cn(headingVariants(props))
