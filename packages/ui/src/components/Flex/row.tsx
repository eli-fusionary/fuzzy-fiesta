import { forwardRef } from 'react'

import type { FlexProps } from './flex'
import { Flex } from './flex'

export type RowProps = Omit<FlexProps, 'direction'>

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  return <Flex {...props} direction="row" ref={ref} />
})

Row.displayName = 'Row'

export { Row }
