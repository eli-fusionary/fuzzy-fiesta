import type { ComponentProps } from 'react'
import { createElement, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'

import type { FlexVariantsProps } from './flex.variants'
import { flex } from './flex.variants'

export type FlexProps = ComponentAsChild &
  ComponentProps<'div'> &
  FlexVariantsProps

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      asChild = false,
      className,
      content,
      direction,
      grow,
      items,
      justify,
      reverse,
      self,
      shrink,
      wrap,
      ...rest
    },
    ref,
  ) => {
    const element = asChild ? Slot : 'div'
    return createElement(element, {
      ...rest,
      className: flex({
        className,
        content,
        direction,
        grow,
        items,
        justify,
        reverse,
        self,
        shrink,
        wrap,
      }),
      ref,
    })
  },
)

Flex.displayName = 'Flex'

export { Flex }
