import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '@local/ui/Heading'
import { RichText } from '@local/ui/RichText'
import { Text } from '@local/ui/Text'

import { Accordion } from './accordion'

const Component: Meta<typeof Accordion> = {
  args: {
    title: <Heading as="h4">Accordion Title</Heading>,
  },
  component: Accordion,
  title: 'Blocks/Accordion',
}

export default Component

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    children: (
      <Text className="text-sm text-textParagraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos
        maiores eaque voluptates itaque facilis amet fugit modi, quibusdam
        voluptatem obcaecati placeat. Labore dolore cupiditate quidem veritatis
        consequatur ullam, consequuntur, libero quasi nam vel, voluptatem velit
        minima reprehenderit explicabo sint.
      </Text>
    ),
    topBorder: true,
  },
  name: 'Accordion',
}

export const WithRichText: Story = {
  args: {
    children: (
      <RichText
        className="cms-html-child text-bodySmall"
        content="
        <p>CFP® certification takes professionals' knowledge and skills to a deeper level, enabling them to become holistic financial advisors. The benefits of CFP® certification for the individual and firm are clear:</p>
        <ul>
          <li>90% of CFP® professionals have a greater sense of credibility with their clients.</li>
          <li>86% report that CFP® certification has had a positive impact on their career satisfaction.</li>
          <li>CFP® professionals see a 26% increase in income.*Statistics from the CFP Board website.</li>
        </ul>
        "
      />
    ),
  },
  name: 'Accordion with Rich Text',
}
