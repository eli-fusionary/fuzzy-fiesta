'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-toggle'

import { cn } from '@local/ui/cn'

import type { ToggleVariantsProps } from './Toggle.variants'
import { toggleVariants } from './Toggle.variants'

export type ToggleProps = ElementRef<typeof Root>

const Toggle = forwardRef<
  ToggleProps,
  ComponentPropsWithoutRef<typeof Root> & ToggleVariantsProps
>(({ className, size, variant, ...props }, ref) => (
  <Root
    className={cn(toggleVariants({ className, size, variant }))}
    {...props}
    ref={ref}
  />
))

Toggle.displayName = Root.displayName

export { Toggle }
