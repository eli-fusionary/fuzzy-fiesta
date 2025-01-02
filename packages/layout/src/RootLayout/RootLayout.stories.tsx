import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from '@local/ui/Banner'
import { Text } from '@local/ui/Text'

import type { RootLayoutProps } from './RootLayout'
import { RootLayout } from './RootLayout'

const Component: Meta<typeof RootLayout> = {
  args: {} satisfies RootLayoutProps,
  component: RootLayout,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Layouts/Root',
}

export default Component

type Story = StoryObj<typeof RootLayout>

export const Default: Story = {
  args: {
    children: <main>A body</main>,
    header: <Banner text={<Text>Just a header</Text>} />,
  },
  name: 'Root',
}
