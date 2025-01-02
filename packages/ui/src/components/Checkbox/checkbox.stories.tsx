import type { Meta, StoryObj } from '@storybook/react'

import type { CheckboxProps } from './checkbox'
import { Checkbox } from './checkbox'

const Component: Meta<typeof Checkbox> = {
  args: {} satisfies CheckboxProps,
  argTypes: {},
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Checkbox',
}

export default Component

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
  name: 'Checkbox',
}
