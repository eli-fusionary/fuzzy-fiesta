import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const constrainerVariants = cva(['mx-auto w-full'], {
  defaultVariants: {
    mode: 'default',
  },
  variants: {
    mode: {
      default: ['max-w-[1724px] px-3 sm:px-6 lg:px-8'],
      defaultWithoutPadding: ['max-w-[1724px]'],
      narrow: ['flex max-w-2xl px-3 sm:px-xl lg:px-3xl'],
    },
  },
})

export type ConstrainerVariantsProps = ExcludeNull<
  VariantProps<typeof constrainerVariants>
>

export const constrainer = (props: ClassProp & ConstrainerVariantsProps) =>
  cn(constrainerVariants(props))
