import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './switch'

const Component: Meta<typeof Switch> = {
  component: Switch,
  title: 'Forms/Switch',
}

export default Component

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {},
  name: 'Switch',
}
