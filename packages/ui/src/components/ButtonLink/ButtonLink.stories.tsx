import type { Meta, StoryObj } from '@storybook/react'

import type { ButtonLinkProps } from './ButtonLink'
import { ButtonLink } from './ButtonLink'

const Component: Meta<typeof ButtonLink> = {
  args: {
    children: 'Press',
    href: 'https://www.google.com',
    kind: 'solid',
  } satisfies ButtonLinkProps,
  argTypes: {
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
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  title: 'Elements/Button Link',
}

export default Component

type Story = StoryObj<typeof ButtonLink>

export const Default: Story = {
  args: {
    children: 'Press',
    href: 'https://www.google.com',
    kind: 'solid',
  },
  name: 'Button Link',
}
