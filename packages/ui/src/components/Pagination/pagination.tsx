import type { ComponentProps, FC } from 'react'

import { cn } from '@local/ui/cn'

export type PaginationProps = ComponentProps<'nav'>

const Pagination: FC<PaginationProps> = ({ className, ...rest }) => (
  <nav
    aria-label="pagination"
    className={cn('flex justify-center self-stretch', className)}
    role="navigation"
    {...rest}
  />
)

export { Pagination }
