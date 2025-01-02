import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea'

const Component: Meta<typeof Textarea> = {
  args: {
    cols: 50,
    placeholder: 'Placeholder text',
    rows: 4,
  },
  argTypes: {},
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Textarea',
}

export default Component

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {},
  name: 'Textarea',
}
