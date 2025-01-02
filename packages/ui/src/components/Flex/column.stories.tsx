import type { Meta, StoryObj } from '@storybook/react'

import type { ColumnProps } from './column'
import { Column } from './column'

const Component: Meta<typeof Column> = {
  args: {
    children: Array.from({ length: 10 })
      .fill(null)
      .map((_v, i) => (
        <div
          className="basis-1/3 border-2 border-orange-200 bg-brandPrimary p-4 text-white"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          Cell {i}
        </div>
      )),
    grow: false,
    items: 'stretch',
    justify: 'normal',
    reverse: false,
    self: 'auto',
    shrink: false,
    wrap: 'wrap',
  } satisfies ColumnProps,
  component: Column,
  title: 'Layout/Flex/Column',
}

export default Component

type Story = StoryObj<typeof Column>

export const Default: Story = {
  args: {},
  name: 'Column',
}
