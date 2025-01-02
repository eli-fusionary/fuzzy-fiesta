import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@local/ui/Badge'
import { Button } from '@local/ui/Button'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import type { LargeTextLockupProps } from './large-text-lockup'
import { LargeTextLockup } from './large-text-lockup'

const Component: Meta<LargeTextLockupProps> = {
  args: {
    heading: <Heading as="h4">Header Goes Here</Heading>,
  },
  argTypes: {},
  component: LargeTextLockup,
  parameters: {},
  title: 'Blocks/LargeTextLockup',
}

export default Component

type Story = StoryObj<LargeTextLockupProps>

export const Default: Story = {
  args: {},
  name: 'LargeTextLockup',
}

export const WithEyebrow: Story = {
  args: {
    eyebrow: <Eyebrow>Eyebrow Goes Here</Eyebrow>,
  },
}

export const WithEyebrowBadge: Story = {
  args: {
    eyebrow: <Badge>What&apos;s New?</Badge>,
  },
}

export const WithSupportingText: Story = {
  args: {
    supportingText: (
      <Text>
        Lorem ipsum dolor sit amet consectetur. Vitae tellus fringilla
        pellentesque enim congue suspendisse. Eu velit adipiscing nisi augue
        volutpat tristique parturient hendrerit at. Congue augue quis massa
        pellentesque justo lectus senectus. Duis nulla pellentesque est eu
        tellus tempus nunc vestibulum.
      </Text>
    ),
  },
}

export const WithButton: Story = {
  args: {
    buttons: [<Button key={1}>Button Text</Button>],
  },
}

export const WithEyebrowAndSupportingText: Story = {
  args: {
    eyebrow: <Eyebrow>Eyebrow Goes Here</Eyebrow>,
    supportingText: (
      <Text>
        Lorem ipsum dolor sit amet consectetur. Vitae tellus fringilla
        pellentesque enim congue suspendisse. Eu velit adipiscing nisi augue
        volutpat tristique parturient hendrerit at. Congue augue quis massa
        pellentesque justo lectus senectus. Duis nulla pellentesque est eu
        tellus tempus nunc vestibulum.
      </Text>
    ),
  },
}

export const WithEyebrowAndButtons: Story = {
  args: {
    buttons: [
      <Button key={1}>Button Text</Button>,
      <Button key={2}>Button Text</Button>,
    ],
    eyebrow: <Eyebrow>Eyebrow Goes Here</Eyebrow>,
  },
}

export const WithSupportingTextAndButton: Story = {
  args: {
    buttons: [<Button key={1}>Button Text</Button>],
    supportingText: (
      <Text>
        Lorem ipsum dolor sit amet consectetur. Vitae tellus fringilla
        pellentesque enim congue suspendisse. Eu velit adipiscing nisi augue
        volutpat tristique parturient hendrerit at. Congue augue quis massa
        pellentesque justo lectus senectus. Duis nulla pellentesque est eu
        tellus tempus nunc vestibulum.
      </Text>
    ),
  },
}

export const WithEyebrowSupportingTextAndButtons: Story = {
  args: {
    buttons: [
      <Button key={1}>Button Text</Button>,
      <Button key={2}>Button Text</Button>,
    ],
    eyebrow: <Eyebrow>Eyebrow Goes Here</Eyebrow>,
    supportingText: (
      <Text>
        Lorem ipsum dolor sit amet consectetur. Vitae tellus fringilla
        pellentesque enim congue suspendisse. Eu velit adipiscing nisi augue
        volutpat tristique parturient hendrerit at. Congue augue quis massa
        pellentesque justo lectus senectus. Duis nulla pellentesque est eu
        tellus tempus nunc vestibulum.
      </Text>
    ),
  },
}
