import type { Meta, StoryObj } from '@storybook/react'

import type { HeadingProps } from './Heading'
import { Heading } from './Heading'

const Component: Meta<typeof Heading> = {
  args: {} satisfies HeadingProps,
  component: Heading,
  title: 'Typography/Heading',
}

export default Component

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    as: 'h1',
    children: 'Generic Heading',
  } satisfies HeadingProps,
  name: 'Heading',
}
