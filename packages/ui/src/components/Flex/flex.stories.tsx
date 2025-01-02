import type { Meta, StoryObj } from '@storybook/react'

import type { FlexProps } from './flex'
import { Flex } from './flex'

const Component: Meta<typeof Flex> = {
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
    direction: 'column',
    grow: false,
    items: 'stretch',
    justify: 'normal',
    reverse: false,
    self: 'auto',
    shrink: false,
    wrap: 'wrap',
  } satisfies FlexProps,
  component: Flex,
  title: 'Layout/Flex/Flex',
}

export default Component

type Story = StoryObj<typeof Flex>

export const Default: Story = {
  args: {},
  name: 'Flex',
}
