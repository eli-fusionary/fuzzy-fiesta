import type { ComponentProps, ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'
import { FormControl } from '@local/ui/FormControl'

export type TextareaProps = ComponentProps<'textarea'>

export const TextareaInner: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (props, ref) => {
  const { className, ...rest } = props

  return (
    <FormControl className={cn('p-2', className)}>
      <textarea {...rest} ref={ref} />
    </FormControl>
  )
}

export const Textarea = forwardRef(TextareaInner)
