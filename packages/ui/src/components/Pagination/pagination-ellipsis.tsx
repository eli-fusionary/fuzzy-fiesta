import type { ComponentProps, FC } from 'react'
import { MoreHorizontal } from 'lucide-react'

import { cn } from '@local/ui/cn'

export type PaginationEllipsisProps = ComponentProps<'span'>

const PaginationEllipsis: FC<PaginationEllipsisProps> = ({
  className,
  ...rest
}) => (
  <span
    aria-hidden
    className={cn(
      'flex h-11 w-11 items-center justify-center border-y border-grey3 bg-white text-textParagraph',
      'hover:bg-grey2',
      className,
    )}
    {...rest}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
)

export { PaginationEllipsis }
