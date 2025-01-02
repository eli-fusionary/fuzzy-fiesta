import type { ComponentProps, FC } from 'react'

import { cn } from '@local/ui/cn'

export type PaginationLinkProps = {
  isActive?: boolean
} & ComponentProps<'a'>

const PaginationLink: FC<PaginationLinkProps> = ({
  children,
  className,
  isActive,
  ...rest
}) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      'flex h-11 w-11 items-center justify-center border-y border-grey3 bg-white text-textParagraph',
      'hover:bg-grey2',
      isActive ? 'border border-grey4 bg-grey2' : '',
      className,
    )}
    {...rest}
  >
    {children}
  </a>
)

export { PaginationLink }
