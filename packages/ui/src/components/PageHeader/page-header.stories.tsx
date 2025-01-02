import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '@local/svg/Logo'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'

import type { PageHeaderProps } from './page-header'
import { PageHeader } from './page-header'

const Component: Meta<typeof PageHeader> = {
  args: {
    backgroundColor: 'none',
    backgroundShape: <Logo />,
    heading: <Heading as="h3">Upcoming Courses Schedules</Heading>,
    pageSection1: <Eyebrow>Page Section Here</Eyebrow>,
    pageSection2: <Eyebrow>Page Section Here</Eyebrow>,
  } satisfies PageHeaderProps,
  argTypes: {},
  component: PageHeader,
  title: 'Blocks/Page Header',
}

export default Component

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {},
  name: 'Page Header',
}
