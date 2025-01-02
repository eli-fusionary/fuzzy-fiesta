import type { Meta, StoryObj } from '@storybook/react'

import { ButtonLink } from '@local/ui/ButtonLink'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import { TextWithImage } from './text-with-image'

const Component: Meta<typeof TextWithImage> = {
  args: {
    body: (
      <Text>
        Ensure professional and organizational growth with leading-edge content
        and proven results from our experts brands
      </Text>
    ),
    eyebrow: <Eyebrow>Learning Programs</Eyebrow>,
    heading: (
      <Heading as="h3">
        Learning programs Powered by the best brands in the industry
      </Heading>
    ),
    imageSrc: 'https://picsum.photos/650/450',
    invert: true,
    links: [
      // eslint-disable-next-line react/jsx-key
      <ButtonLink href="https://www.google.com">Teams</ButtonLink>,
      // eslint-disable-next-line react/jsx-key
      <ButtonLink href="https://www.google.com" kind="outline">
        Individuals
      </ButtonLink>,
    ],
  },
  argTypes: {},
  component: TextWithImage,
  parameters: {},
  title: 'Blocks/Text With Image',
}

export default Component

type Story = StoryObj<typeof TextWithImage>

export const Default: Story = {
  args: {},
  name: 'Text With Image',
}

export const WithAccordion: Story = {
  args: {
    accordions: [
      {
        description: (
          <Text className="text-sm text-textParagraph">
            I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas cupiditate laboriosam
            fugiat.
          </Text>
        ),
        title: <Heading as="h6">Expander Section Header</Heading>,
      },
      {
        description: (
          <Text className="text-sm text-textParagraph">
            I don&apos;t know, but the flag is a big plus. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quas cupiditate laboriosam
            fugiat.
          </Text>
        ),
        title: (
          <Heading as="h6">
            What&apos;s the best thing about Switzerland?
          </Heading>
        ),
      },
    ],
    body: (
      <Text>
        Ensure professional and organizational growth with leading-edge content
        and proven results from our experts brands
      </Text>
    ),
    eyebrow: <Eyebrow>Learning Programs</Eyebrow>,
    heading: (
      <Heading as="h3">
        Learning programs Powered by the best brands in the industry
      </Heading>
    ),
    imageSrc: 'https://picsum.photos/650/450',
    invert: false,
  },
  name: 'Text With Image with Accordion',
}
