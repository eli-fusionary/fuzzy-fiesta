import { forwardRef } from 'react'

import type { FlexProps } from './flex'
import { Flex } from './flex'

export type ColumnProps = Omit<FlexProps, 'direction'>

const Column = forwardRef<HTMLDivElement, ColumnProps>((props, ref) => {
  return <Flex {...props} direction="column" ref={ref} />
})

Column.displayName = 'Column'

export { Column }
