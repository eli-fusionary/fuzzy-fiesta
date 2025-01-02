import type { Meta, StoryObj } from '@storybook/react'

import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Jumbotron } from '@local/ui/Jumbotron'
import { Text } from '@local/ui/Text'

import { Accordion } from '../Accordion/accordion'
import { AccordionSection } from './accordion-section'

const Component: Meta<typeof AccordionSection> = {
  args: {
    accordions: [
      <Accordion
        key="og1"
        title={<Text>What&apos;s the best thing about Switzerland?</Text>}
        topBorder
      >
        <Text>
          I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </Text>
      </Accordion>,
      <Accordion
        key="og2"
        title={<Text>How much wood could a woodchuck chuck?</Text>}
        topBorder
      >
        <Text>It depends on how you measure the wood.</Text>
      </Accordion>,
      <Accordion
        key="og3"
        title={<Text>What if I ran out of joke accordions to make?</Text>}
        topBorder
      >
        <Text>
          Don&apos;t give up, you can do it! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </Text>
      </Accordion>,
    ],
    jumbotron: (
      <Jumbotron
        alignment="left"
        body={
          <Text className="max-w-[600px] text-textParagraph" size="base">
            Have any question? We’ve gathered answers to some frequently asked
            questions.
          </Text>
        }
        eyebrow={<Eyebrow>Eyebrow Text</Eyebrow>}
        heading={<Heading as="h3">FAQs</Heading>}
      />
    ),
  },
  argTypes: {},
  component: AccordionSection,
  title: 'Blocks/Accordion Section',
}

export default Component

type Story = StoryObj<typeof AccordionSection>

export const Default: Story = {
  args: {},
  name: 'Accordion Section',
}
