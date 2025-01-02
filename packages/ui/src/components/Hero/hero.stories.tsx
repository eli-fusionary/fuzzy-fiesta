import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '@local/svg/Logo'
import { Button } from '@local/ui/Button'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import { Hero } from './hero'

const Component: Meta<typeof Hero> = {
  args: {
    backgroundColor: 'primary',
    imageSrc:
      'https://cdn.builder.io/api/v1/image/assets%2Faae6c93118b04bd9808ce93b5c8c3af8%2F1b7ed8d5ab4e4aedb30793757f40f1be',
    slides: [
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        heading: (
          <Heading as="h2" className="text-white">
            It&apos;s not what you study, it&apos;s <em>how</em> you study.
          </Heading>
        ),
      },
    ],
  },
  argTypes: {},
  component: Hero,
  parameters: {},
  title: 'Blocks/Hero',
}

export default Component

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {},
  name: 'Hero',
}

export const WithEyebrow: Story = {
  args: {
    slides: [
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        eyebrow: <Text className="text-white">Eyebrow</Text>,
        heading: (
          <Heading as="h2" className="text-white">
            It&apos;s not what you study, it&apos;s <em>how</em> you study.
          </Heading>
        ),
      },
    ],
  },
}

export const WithButton: Story = {
  args: {
    slides: [
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        button: <Button>Button</Button>,
        heading: (
          <Heading as="h2" className="text-white">
            It&apos;s not what you study, it&apos;s <em>how</em> you study.
          </Heading>
        ),
      },
    ],
  },
}

export const IsSlider: Story = {
  args: {
    slides: [
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        heading: (
          <Heading as="h2" className="text-white">
            It&apos;s not what you study, it&apos;s <em>how</em> you study.
          </Heading>
        ),
      },
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        eyebrow: (
          <Eyebrow className="text-white opacity-80">Securities</Eyebrow>
        ),
        heading: (
          <Heading as="h2" className="text-white">
            Heading for Slide 2
          </Heading>
        ),
      },
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        button: <Button>Button</Button>,
        heading: (
          <Heading as="h2" className="text-white">
            Slide 3 Heading
          </Heading>
        ),
      },
      {
        body: (
          <Text className="text-textParagraphInverse opacity-80">
            Lorem ipsum dolor sit amet consectetur. Aliquam tortor dis purus a
            massa viverra euismod id elementum. Nunc iaculis in viverra suscipit
            ut ipsum. Non aenean leo a facilisis sit. Cursus leo tortor nec
            tincidunt eget hac mattis feugiat.
          </Text>
        ),
        button: <Button>Button</Button>,
        eyebrow: (
          <Eyebrow className="text-white opacity-80">
            Securities Slide 4
          </Eyebrow>
        ),
        heading: (
          <Heading as="h2" className="text-white">
            Heading for Slide 4
          </Heading>
        ),
      },
    ],
  },
}

export const WithBackgroundShape: Story = {
  args: {
    backgroundShape: <Logo />,
    showImageFirst: true,
  },
}

export const ImageSecond: Story = {
  args: {
    backgroundShape: <Logo />,
    showImageFirst: false,
  },
}
