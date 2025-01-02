import type { SVGProps } from 'react'
import { forwardRef, memo } from 'react'

import { cn } from '@local/ui/cn'

const ButtonLinkArrow = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      className={cn(
        'size-5',
        className,
        'translate-x-1 scale-x-0 fill-current stroke-current opacity-0 transition-transform group-hover:scale-x-100 group-hover:opacity-100',
      )}
      ref={ref}
      viewBox="0 0 24 24"
      {...props}
    >
      <line strokeWidth={2} x1="1" x2="22" y1="12" y2="12" />
      <polyline
        points="20,9 23,12 20,15"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
)

ButtonLinkArrow.displayName = 'Button Link Arrow'
const Memo = memo(ButtonLinkArrow)
export { Memo as ButtonLinkArrow }
