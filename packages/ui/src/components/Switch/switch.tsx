'use client'

import type { ComponentPropsWithoutRef, ElementRef } from 'react'
import { forwardRef } from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@local/ui/cn'

export type SwitchProps = ElementRef<typeof SwitchPrimitives.Root>

const Switch = forwardRef<
  SwitchProps,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-formBorderActive focus-visible:ring-offset-2 focus-visible:ring-offset-formBackground disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brandPrimary data-[state=unchecked]:bg-grey2',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-formBackground shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
