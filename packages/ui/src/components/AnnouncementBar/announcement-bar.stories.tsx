import type { Meta, StoryObj } from '@storybook/react'

import type { AnnouncementBarProps } from './announcement-bar'
import { AnnouncementBar } from './announcement-bar'

const Component: Meta<typeof AnnouncementBar> = {
  args: {
    text: 'West LegalEdcenter & CheckPoint Learning are now a part of CeriFi!',
  } satisfies AnnouncementBarProps,
  argTypes: {},
  component: AnnouncementBar,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Elements/Announcement Bar',
}

export default Component

type Story = StoryObj<typeof AnnouncementBar>

export const Default: Story = {
  args: {},
  name: 'Announcement Bar',
}
