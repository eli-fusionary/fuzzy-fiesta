import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'

const Component: Meta<typeof NotFoundPage> = {
  argTypes: {},
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Pages/Not Found',
}

export default Component

type Story = StoryObj<typeof NotFoundPage>

export const Default: Story = {
  decorators: [
    Story => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
  name: 'Not Found',
}
