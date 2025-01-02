import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@local/ui/Button'
import { Heading } from '@local/ui/Heading'
import { RichText } from '@local/ui/RichText'
import { Text } from '@local/ui/Text'

import { TextSectionBreak } from './text-section-break'

const Component: Meta<typeof TextSectionBreak> = {
  args: {
    // eslint-disable-next-line react/jsx-key
    buttons: [<Button>Talk to an Advisor</Button>],
    children: (
      <Text>
        Whether you want to start planning certification programs for your
        organization or you&apos;d like to explore our learning solutions,
        we&apos;re here to help. Looking for a specific program?
      </Text>
    ),
    heading: (
      <Heading as="h3" className="text-white">
        Ready to get started?
      </Heading>
    ),
  },
  argTypes: {},
  component: TextSectionBreak,
  parameters: {},
  title: 'Blocks/Text Section Break',
}

export default Component

type Story = StoryObj<typeof TextSectionBreak>

export const Default: Story = {
  args: {
    heading: (
      <Heading as="h3" className="text-white">
        Ready to get started?
      </Heading>
    ),
    imageSrc: 'https://picsum.photos/1000/500',
  },
  name: 'Text Section Break',
}

export const WithRichTextBody: Story = {
  args: {
    children: (
      <RichText
        background="none"
        className="cms-html-child"
        content="<p>Whether you want to start planning certification programs for your organization or you&#x27;d like to explore our learning solutions, we&#x27;re here to help. Looking for a specific program?</p>"
      />
    ),
    imageSrc: 'https://picsum.photos/1000/500',
  },
}
