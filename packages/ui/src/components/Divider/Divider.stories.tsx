import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@local/ui/Text'

import type { DividerProps } from './Divider'
import { Divider } from './Divider'

const Component: Meta<typeof Divider> = {
  args: {} satisfies DividerProps,
  argTypes: {
    orientation: {
      table: {
        disable: true,
      },
    },
  },
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Layout/Divider',
}

export default Component

type Story = StoryObj<typeof Divider>

export const WithContent: Story = {
  args: {
    children: <Text>some text</Text>,
  },
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    className: 'h-8',
    orientation: 'vertical',
  },
}
