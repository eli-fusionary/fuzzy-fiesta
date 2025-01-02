import type { Ref, SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    fill="none"
    height={props.height ?? 19}
    ref={ref}
    viewBox="0 0 18 19"
    width={props.width ?? 18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.75 12.426H9v-3h-.75m.75-3h.008m6.742 3a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
      stroke="#6A8295"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export { Memo as InformationCircle }
