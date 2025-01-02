import type { Meta, StoryObj } from '@storybook/react'

import type { TextProps } from './Text'
import { Text } from './Text'

const Component: Meta<typeof Text> = {
  args: {} satisfies TextProps,
  argTypes: {},
  component: Text,
  title: 'Typography/Text',
}

export default Component

type Story = StoryObj<typeof Text>

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque laoreet suspendisse. Egestas pretium aenean pharetra magna. Tortor condimentum lacinia quis vel. Elementum sagittis vitae et leo duis ut. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Leo integer malesuada nunc vel risus commodo. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Diam vel quam elementum pulvinar etiam non quam. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque.'

export const Default: Story = {
  args: {
    children: text,
  },
  name: 'Text',
}
