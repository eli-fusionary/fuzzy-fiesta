import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { ButtonProps } from './Button'
import { Button } from './Button'

const Component: Meta<typeof Button> = {
  args: {
    children: 'Button text',
    onClick: action('onClick'),
  } satisfies ButtonProps,
  argTypes: {
    asChild: { table: { disable: true } },
    kind: {
      control: { type: 'select' },
      options: [
        'solid',
        'outline',
        'alt-solid',
        'alt-outline',
        'white-solid',
        'white-outline',
      ],
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  title: 'Elements/Button',
}

export default Component

type Story = StoryObj<typeof Button>

export const Default: Story = {
  name: 'Button',
}
