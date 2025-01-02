import type { FC } from 'react'
import { ChevronRight } from 'lucide-react'

import { cn } from '@local/ui/cn'

import type { PaginationLinkProps } from './pagination-link'
import { PaginationLink } from './pagination-link'

export type PaginationNextProps = PaginationLinkProps

const PaginationNext: FC<PaginationNextProps> = ({ className, ...rest }) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(
      'flex h-11 w-11 items-center justify-center rounded-r-xxs border-y border-r border-grey3 bg-white text-textParagraph',
      className,
    )}
    {...rest}
  >
    <ChevronRight className="size-4" />
  </PaginationLink>
)

export { PaginationNext }
