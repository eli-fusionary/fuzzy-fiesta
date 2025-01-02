import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import type { LinkProps } from './link'
import { Link } from './link'

const Component: Meta<typeof Link> = {
  args: {
    children: 'Learn More',
    href: '#',
    onClick: action('onClick'),
  } satisfies LinkProps,
  component: Link,
  parameters: {
    layout: 'centered',
  },
  title: 'Elements/Link',
}

export default Component

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    arrowDirection: 'left',
  },
  name: 'Link',
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Secondary: Story = {
  args: {
    kind: 'secondary',
  },
}
