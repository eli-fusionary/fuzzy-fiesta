import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const focusRingVariants = cva([], {
  defaultVariants: {
    color: 'primary',
  },
  variants: {
    color: {
      form: 'focus-visible:ring-formBorderActive enabled:focus:ring-formBorderActive',
      primary:
        'focus-visible:ring-brandPrimary enabled:focus:ring-brandPrimary',
    },
  },
})

export type FocusRingVariantsProps = ExcludeNull<
  VariantProps<typeof focusRingVariants>
>

export const focusRing = (props: ClassProp & FocusRingVariantsProps) =>
  cn(focusRingVariants(props))
