/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import { SliderSection } from './slider-section'

const TestimonialCardTest = () => (
  <div>
    <Text>
      Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna
      congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras
      vitae praesent morbi adipiscing purus consectetur mi.
    </Text>
  </div>
)

const Component: Meta<typeof SliderSection> = {
  args: {
    backgroundColor: 'primary',
    children: [
      <TestimonialCardTest />,
      <TestimonialCardTest />,
      <TestimonialCardTest />,
      <TestimonialCardTest />,
      <TestimonialCardTest />,
      <TestimonialCardTest />,
      <TestimonialCardTest />,
    ],
    heading: <Heading as="h3">Best education available</Heading>,
  },
  argTypes: {},
  component: SliderSection,
  title: 'Blocks/Slider Section',
}

export default Component

type Story = StoryObj<typeof SliderSection>

export const Default: Story = {
  args: {},
  name: 'Slider Section',
}
