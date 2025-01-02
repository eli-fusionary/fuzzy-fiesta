'use client'

import type { Ref, SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => {
  const { color = '#42c3de', ...rest } = props
  return (
    <svg
      height="100%"
      ref={ref}
      viewBox="0 0 142.555 141.171"
      width="100%"
      x={0}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      y={0}
      {...rest}
    >
      <g transform="translate(-590.765 -444.829)">
        <g>
          <path
            d="M662.4 586c-3.6-.3-6.8-.3-9.9-.7-6.1-.9-12-2.3-17.7-4.7-4.6-1.9-8.9-4.2-13-7-6.5-4.5-12.2-9.9-16.9-16.2-3.5-4.7-6.5-9.8-8.8-15.2-2.3-5.3-3.7-10.7-4.6-16.3-.7-4.7-.9-9.5-.6-14.4.3-4.5.9-9 2-13.3 1.3-5.4 3.3-10.5 5.9-15.4 3-5.5 6.6-10.6 10.9-15.2 4.4-4.9 9.6-8.8 15.1-12.3 3.9-2.5 8-4.5 12.4-6 3.4-1.2 7-2.1 10.5-2.9 2.6-.6 5.3-1 8-1.2 3.6-.2 7.3-.6 11-.2 4.8.5 9.6 1.4 14.3 2.5 4.8 1 9.4 3 13.8 5.2 5.6 2.9 10.8 6.4 15.4 10.6 3.5 3.2 6.8 6.7 9.5 10.6 2.1 3 3.9 6.2 5.7 9.4 2.7 4.8 4.5 10 5.8 15.3.9 3.9 1.7 7.8 1.8 11.8.1 2.3.4 4.6.3 6.9-.1 2.4-.4 4.8-.7 7.2-.6 5-1.8 9.9-3.5 14.7-1 2.8-2.3 5.5-3.6 8.1-4.3 8.7-10.3 16.1-17.8 22.4-4.6 3.8-9.6 7.2-15.1 9.6-3.5 1.6-7.1 2.8-10.7 3.9-2.8.9-5.6 1.7-8.4 2.1-3.8.3-7.7.4-11.1.7zm55.3-70.9c-.4-3.3-.6-6.5-1.1-9.8-.7-4.3-1.9-8.4-3.9-12.3-1.4-2.8-2.8-5.7-4.6-8.4-2.6-4.1-5.9-7.7-9.6-10.8-3.1-2.7-6.4-5.2-10.3-6.7-.1-.1-.3-.1-.4-.2-1.9-1.8-4.4-2.3-6.6-3.2-2.2-.8-4.5-1-6.7-1.8-3.9-1.3-7.9-1.5-11.9-1.6-2-.1-4 0-5.9.2-2.2.3-4.4.8-6.6 1.1-3.7.6-7.3 1.8-10.7 3.4-1.2.6-2.3 1.4-3.5 2.1-1.3.7-2.6 1.3-3.8 2-4.7 2.7-8.6 6.3-12.1 10.4-3.2 3.7-5.8 7.7-8 12.1-1.9 3.8-3 8-4.1 12.1-.3 1.1-.3 2.3-.5 3.5 0 .4 0 .8-.1 1.2-.1.3-.4.6-.4 1-.1 1.8-.3 3.6-.3 5.5 0 1.7.1 3.3.2 5 .2 2.2.3 4.5.8 6.7 1.4 6 3.5 11.7 6.8 16.9 2.6 4.2 5.6 8 9.1 11.4 3.8 3.7 8 6.8 12.7 9.2 3 1.6 6.3 2.8 9.5 3.9 5 1.8 10.2 2.4 15.5 2.6 1.6.1 3.3-.2 4.9-.4 2.4-.2 4.7-.3 7-.8 5.4-1.1 10.5-3 15.3-5.6 6-3.2 11.1-7.4 15.6-12.4 4.1-4.6 7.2-9.9 9.5-15.6 2.7-6.8 3.9-13.6 4.2-20.7z"
            fill={color}
          />
          <path
            d="M682.2 531.9c-.9 0-1.8.1-2.6 0-2.3-.3-4.1 1.4-4.6 3.5-1 4.6-2.2 9.3-3.4 13.9-.4 1.5-1.5 2.4-3.4 2.4H633.6c-2.4 0-3-.8-2.4-3.1 1.2-4.6 2.3-9.2 3.5-13.8.5-2.1 0-2.8-2.3-2.8h-4.6c-1.2 0-1.8-.6-1.7-1.8.3-2.1.9-4.2 1.4-6.3l3.6-14.4c.5-1.9 1.6-2.6 3.5-2.7h4.8c1.4 0 2.3-.7 2.6-2.1 1.1-4.2 1.9-8.5 3.2-12.7 1.1-3.4 2.9-6.4 5.8-8.7 2-1.6 4.3-3 6.8-3.8 1.4-.4 2.9-.7 4.4-.7 10.5-.1 20.9 0 31.4 0 1.7 0 2.4.9 2 2.6-.5 1.9-1 3.7-1.4 5.6-.5 2.3-1.5 3.7-4.2 3.9-2.4.2-4.1 1.8-4.7 4.1-1 3.3-1.7 6.7-2.5 10.1-.2.8 1.1 1.8 2.2 1.8h6.9c1.8 0 2.4.9 2 2.6-1.6 6.4-3.4 12.9-4.8 19.3-.5 2.4-1.9 3.4-4.1 3.2-.9-.1-1.8-.1-2.8-.1z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as Icon }