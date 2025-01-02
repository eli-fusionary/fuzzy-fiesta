import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const flexVariants = cva(['flex'], {
  compoundVariants: [
    {
      className: ['flex-col'],
      direction: 'column',
      reverse: false,
    },
    {
      className: ['flex-col-reverse'],
      direction: 'column',
      reverse: true,
    },
    {
      className: ['flex-row'],
      direction: 'row',
      reverse: false,
    },
    {
      className: ['flex-row-reverse'],
      direction: 'row',
      reverse: true,
    },
  ],
  defaultVariants: {
    content: undefined,
    direction: 'column',
    grow: undefined,
    items: undefined,
    justify: undefined,
    reverse: false,
    self: undefined,
    shrink: undefined,
    wrap: undefined,
  },
  variants: {
    content: {
      around: ['content-around'],
      baseline: ['content-baseline'],
      between: ['content-between'],
      center: ['content-center'],
      end: ['content-end'],
      evenly: ['content-evenly'],
      none: ['content-none'],
      normal: ['content-normal'],
      start: ['content-start'],
      stretch: ['content-stretch'],
    },
    direction: {
      column: undefined,
      row: undefined,
    },
    grow: {
      false: ['flex-grow-0'],
      true: ['flex-grow'],
    },
    items: {
      baseline: ['items-baseline'],
      center: ['items-center'],
      end: ['items-end'],
      start: ['items-start'],
      stretch: ['items-stretch'],
    },
    justify: {
      around: ['justify-around'],
      between: ['justify-between'],
      center: ['justify-center'],
      end: ['justify-end'],
      evenly: ['justify-evenly'],
      normal: ['justify-normal'],
      start: ['justify-start'],
      stretch: ['justify-evenly'],
    },
    reverse: {
      false: undefined,
      true: undefined,
    },
    self: {
      auto: ['self-auto'],
      baseline: ['self-baseline'],
      center: ['self-center'],
      end: ['self-end'],
      start: ['self-start'],
      stretch: ['self-stretch'],
    },
    shrink: {
      false: ['flex-shrink-0'],
      true: ['flex-shrink'],
    },
    wrap: {
      nowrap: ['flex-nowrap'],
      reverse: ['flex-wrap-reverse'],
      wrap: ['flex-wrap'],
    },
  },
})

export type FlexVariantsProps = ExcludeNull<VariantProps<typeof flexVariants>>

export const flex = (props: ClassProp & FlexVariantsProps) =>
  cn(flexVariants(props))
