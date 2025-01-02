import type { ComponentProps, ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'

import { cn } from '@local/ui/cn'

export type PaginationContentProps = ComponentProps<'ul'>

const PaginationContentRoot: ForwardRefRenderFunction<
  HTMLUListElement,
  PaginationContentProps
> = ({ className, ...rest }, ref) => (
  <ul
    className={cn(
      'flex flex-row items-center divide-x divide-grey3',
      className,
    )}
    {...rest}
    ref={ref}
  />
)

export const PaginationContent = forwardRef(PaginationContentRoot)
