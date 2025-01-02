import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'
import { useFormField } from '@local/ui/hooks/useFormField'

export type FormLabelProps = {
  skipHtmlFor?: boolean
} & ComponentPropsWithoutRef<'label'>

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className, skipHtmlFor, ...rest }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <label
        className={cn(
          'text-formLabel',
          'font-normal',
          'text-[0.875rem]/[100%]',
          'tracking-normal',
          error && 'text-formError',
          className,
        )}
        htmlFor={skipHtmlFor ? undefined : formItemId}
        {...rest}
        ref={ref}
      >
        {children}
      </label>
    )
  },
)

FormLabel.displayName = 'FormLabel'

export { FormLabel }
