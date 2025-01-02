import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import NextLink from 'next/link'

import { cn } from '@local/ui/cn'
import { ExpandingArrow } from '@local/ui/ExpandingArrow'

import type { LinkVariantsProps } from './link.variants'
import { link } from './link.variants'

export type LinkProps = {
  arrowDirection?: 'left' | 'right' | null
} & ComponentProps<typeof NextLink> &
  LinkVariantsProps

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ arrowDirection, children, className, kind, size, ...props }, ref) => {
    const classes = cn('group flex flex-row items-center gap-2', className)
    return (
      <NextLink
        className={cn(link({ className: classes, kind, size }))}
        ref={ref}
        {...props}
      >
        {arrowDirection === 'left' && <ExpandingArrow className="rotate-180" />}
        {children}
        {arrowDirection === 'right' && <ExpandingArrow />}
      </NextLink>
    )
  },
)

Link.displayName = 'Link'

export { Link }
