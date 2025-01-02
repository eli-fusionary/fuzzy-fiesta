import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'
import { cn } from '@local/ui/cn'

import type { BadgeVariantsProps } from './Badge.variants'
import { badge } from './Badge.variants'

export type BadgeProps = BadgeVariantsProps &
  ComponentAsChild &
  ComponentPropsWithoutRef<'span'>

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ asChild, className, kind, ring, shape, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'span'
    return (
      <Comp
        className={cn(badge({ className, kind, ring, shape }))}
        ref={ref}
        {...rest}
      />
    )
  },
)

Badge.displayName = 'Badge'

export { Badge }
