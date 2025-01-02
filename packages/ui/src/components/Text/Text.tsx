import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'

import type { TextVariantsProps } from './Text.variants'
import { text } from './Text.variants'

export type TextProps = ComponentAsChild &
  ComponentPropsWithoutRef<'p'> &
  TextVariantsProps

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ asChild, children, className, size, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'p'
    return (
      <Comp {...rest} className={text({ className, size })} ref={ref}>
        {children}
      </Comp>
    )
  },
)

Text.displayName = 'Text'

export { Text }
