import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'
import { useFormField } from '@local/ui/hooks/useFormField'

import type { TextProps } from '../Text'
import { Text } from '../Text'

export type FormDescriptionProps = ComponentProps<'p'> & TextProps

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...rest }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <Text
        className={cn(className)}
        id={formDescriptionId}
        size="small"
        {...rest}
        ref={ref}
      />
    )
  },
)

FormDescription.displayName = 'FormDescription'

export { FormDescription }
