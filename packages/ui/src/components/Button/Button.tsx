import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'
import { cn } from '@local/ui/cn'

import type { ButtonVariantsProps } from './Button.variants'
import { button } from './Button.variants'

export type ButtonProps = ButtonVariantsProps &
  ComponentAsChild &
  ComponentProps<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, kind, shape, size, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(button({ className, kind, shape, size }))}
        ref={ref}
        {...rest}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
