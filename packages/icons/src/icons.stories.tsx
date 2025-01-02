import type { Meta, StoryObj } from '@storybook/react'

import { ArrayIcon, Icon } from './index'

const Component: Meta<typeof Icon> = {
  args: {},
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ArrayIcon,
    },
  },
  component: Icon,
  title: 'Icons/Icon',
}

export default Component

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'MenuIcon',
  },
  name: 'Icon',
}
