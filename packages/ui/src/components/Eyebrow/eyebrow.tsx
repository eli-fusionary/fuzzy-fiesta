import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'
import { cn } from '@local/ui/cn'

export type EyebrowProps = ComponentAsChild & ComponentPropsWithoutRef<'p'>

const Eyebrow = forwardRef<HTMLParagraphElement, EyebrowProps>(
  ({ asChild, children, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'p'
    return (
      <Comp
        className={cn('text-textEyebrow', 'text-eyebrow', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </Comp>
    )
  },
)

Eyebrow.displayName = 'Eyebrow'

export { Eyebrow }
