import type { Meta, StoryObj } from '@storybook/react'

import type { EyebrowProps } from './eyebrow'
import { Eyebrow } from './eyebrow'

const Component: Meta<typeof Eyebrow> = {
  args: {} satisfies EyebrowProps,
  argTypes: {},
  component: Eyebrow,
  title: 'Typography/Eyebrow',
}

export default Component

type Story = StoryObj<typeof Eyebrow>

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'

export const Default: Story = {
  args: {
    children: text,
  },
  name: 'Eyebrow',
}
