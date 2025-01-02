import type { ComponentProps, ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'

export type PaginationItemProps = ComponentProps<'li'>

const PaginationItemRoot: ForwardRefRenderFunction<
  HTMLLIElement,
  PaginationItemProps
> = ({ className, ...rest }, ref) => (
  <li className={cn('cursor-pointer', className)} {...rest} ref={ref} />
)

export const PaginationItem = forwardRef(PaginationItemRoot)
