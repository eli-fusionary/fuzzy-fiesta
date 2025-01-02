import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from './banner'

const Component: Meta<typeof Banner> = {
  args: {},
  argTypes: {},
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Elements/Banner',
}

export default Component

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    text: 'Banner',
  },
  name: 'Banner',
}

export const WithExtended: Story = {
  args: {
    children: (
      <div className="border border-red-600 p-2">Some cool component</div>
    ),
    text: 'Banner text!',
  },
  name: 'Extended',
}
