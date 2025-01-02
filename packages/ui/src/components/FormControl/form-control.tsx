import type { ComponentProps, ComponentRef, PropsWithChildren } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@local/ui/cn'
import { useFormField } from '@local/ui/hooks/useFormField'

export type FormControlProps = PropsWithChildren<ComponentProps<typeof Slot>>

const FormControl = forwardRef<ComponentRef<typeof Slot>, FormControlProps>(
  ({ children, className, ...rest }, ref) => {
    const { error, formDescriptionId, formItemId, formMessageId } =
      useFormField()
    const classes = cn(
      'sm:text-sm sm:leading-6',
      'block rounded-form border-0 py-1.5 outline-none',
      'text-textParagraph placeholder:text-formPlaceholder',
      'ring-1 ring-inset ring-formBorder',
      'focus:ring-2 focus:ring-inset focus:ring-formBorderActive',
      'font-normal',
      className,
    )

    return (
      <Slot
        aria-describedby={
          error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId
        }
        aria-invalid={Boolean(error)}
        className={classes}
        id={formItemId}
        {...rest}
        ref={ref}
      >
        {children}
      </Slot>
    )
  },
)

FormControl.displayName = 'FormControl'

export { FormControl }
