import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const leftSectionVariants = cva(['h-px', 'bg-divider'], {
  defaultVariants: {
    align: 'center',
  },
  variants: {
    align: {
      center: ['grow', 'me-2'],
      left: undefined,
      right: ['grow', 'me-2'],
    },
  },
})

export const rightSectionVariants = cva(['h-px', 'bg-divider'], {
  defaultVariants: {
    align: 'center',
  },
  variants: {
    align: {
      center: ['grow', 'ms-2'],
      left: ['grow', 'ms-2'],
      right: undefined,
    },
  },
})

export type LeftSectionVariants = ExcludeNull<
  VariantProps<typeof leftSectionVariants>
>

export type RightSectionVariants = ExcludeNull<
  VariantProps<typeof rightSectionVariants>
>

export const leftSection = (props: ClassProp & LeftSectionVariants) =>
  cn(leftSectionVariants(props))

export const rightSection = (props: ClassProp & RightSectionVariants) =>
  cn(rightSectionVariants(props))
