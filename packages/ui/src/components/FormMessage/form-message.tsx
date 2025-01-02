import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'
import { useFormField } from '@local/ui/hooks/useFormField'

import type { TextProps } from '../Text'
import { Text } from '../Text'

export type FormMessageProps = ComponentProps<'p'> & TextProps

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ children, className, ...rest }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error.message) : children

    if (!body) return null

    return error ? (
      <Text
        className={cn('text-formError', className)}
        id={formMessageId}
        size="small"
        {...rest}
        ref={ref}
      >
        {body}
      </Text>
    ) : null
  },
)

FormMessage.displayName = 'FormMessage'

export { FormMessage }
