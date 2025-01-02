import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const Component: Meta<typeof Badge> = {
  args: {
    asChild: false,
    children: 'Badge Text',
    kind: 'primary',
    ring: 'none',
    shape: 'roundedRectangle',
  },
  argTypes: {},
  component: Badge,
  title: 'Elements/Badge',
}

export default Component

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {},
  name: 'Badge',
}

export const AsRibbon: Story = {
  args: {
    children: 'Pass Guarantee',
    shape: 'ribbon',
  },
}

export const AsAsymmetricalRibbon: Story = {
  args: {
    children: 'Guarantee to Pass',
    shape: 'asymmetricalRibbon',
  },
}
