import type { Meta, StoryObj } from '@storybook/react'

import type { RowProps } from './row'
import { Row } from './row'

const Component: Meta<typeof Row> = {
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
  } satisfies RowProps,
  component: Row,
  title: 'Layout/Flex/Row',
}

export default Component

type Story = StoryObj<typeof Row>

export const Default: Story = {
  args: {},
  name: 'Row',
}
