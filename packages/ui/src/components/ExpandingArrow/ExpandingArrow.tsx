import type { SVGProps } from 'react'
import { forwardRef, memo } from 'react'

import { cn } from '@local/ui/cn'

const ExpandingArrow = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      className={cn('size-5', className, 'fill-current stroke-current')}
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <line
        className="translate-x-1.5 scale-x-50 transition-transform group-hover:translate-x-0 group-hover:scale-x-100"
        strokeWidth={2}
        x1="1"
        x2="22"
        y1="12"
        y2="12"
      />
      <polyline
        className="-translate-x-1.5 transition-transform group-hover:translate-x-0"
        points="20,9 23,12 20,15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
)

ExpandingArrow.displayName = 'Expanding Arrow'
const Memo = memo(ExpandingArrow)
export { Memo as ExpandingArrow }
