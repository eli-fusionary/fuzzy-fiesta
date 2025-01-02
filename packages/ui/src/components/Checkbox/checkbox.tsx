import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'

import { cn } from '@local/ui/cn'
import { FocusRing } from '@local/ui/FocusRing'

export type CheckboxProps = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>

const Checkbox = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <FocusRing color="primary" keyboard mouse>
    <CheckboxPrimitive.Root
      className={cn(
        'inline-flex items-center justify-center',
        'ring-offset-background',
        'peer h-6 w-6 shrink-0 rounded',
        'border border-brandPrimary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-brandPrimary data-[state=checked]:text-textParagraphInverse',
        className,
      )}
      ref={ref}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Check className="size-6" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </FocusRing>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
