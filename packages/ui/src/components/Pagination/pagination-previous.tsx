import type { FC } from 'react'
import { ChevronLeft } from 'lucide-react'

import { cn } from '@local/ui/cn'

import type { PaginationLinkProps } from './pagination-link'
import { PaginationLink } from './pagination-link'

export type PaginationPreviousProps = PaginationLinkProps

const PaginationPrevious: FC<PaginationPreviousProps> = ({
  className,
  ...rest
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(
      'flex h-11 w-11 items-center justify-center rounded-l-xxs border-y border-l border-grey3 bg-white text-textParagraph',
      className,
    )}
    {...rest}
  >
    <ChevronLeft className="size-4" />
  </PaginationLink>
)

export { PaginationPrevious }
