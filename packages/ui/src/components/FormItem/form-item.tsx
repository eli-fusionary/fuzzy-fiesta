import type { HTMLAttributes } from 'react'
import { createContext, forwardRef, useId, useMemo } from 'react'

import { cn } from '@local/ui/cn'

import { Flex } from '../Flex'
import { FormDescription } from '../FormDescription'
import { FormLabel } from '../FormLabel'
import { FormMessage } from '../FormMessage'

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

export type FormItemProps = {
  description?: string
  label?: string
  labelClasses?: string
  required?: boolean
} & HTMLAttributes<HTMLDivElement>

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      children,
      className,
      description,
      label,
      labelClasses,
      required,
      ...props
    },
    ref,
  ) => {
    const id = useId()
    const memoizedId = useMemo(() => ({ id }), [id])

    return (
      <FormItemContext.Provider value={memoizedId}>
        <div
          className={cn('flex flex-col space-y-2', className)}
          ref={ref}
          {...props}
        >
          {label ? (
            <FormLabel
              className={cn(
                'flex flex-col gap-2 self-stretch font-semibold',
                labelClasses,
              )}
            >
              <Flex direction="row" items="start" self="stretch">
                <span>{label}</span>
                {required ? <span className="text-formError">*</span> : null}
              </Flex>
              {children}
            </FormLabel>
          ) : (
            children
          )}
          {description ? (
            <FormDescription>{description}</FormDescription>
          ) : null}
          <FormMessage />
        </div>
      </FormItemContext.Provider>
    )
  },
)

FormItem.displayName = 'FormItem'

export { FormItem, FormItemContext }
