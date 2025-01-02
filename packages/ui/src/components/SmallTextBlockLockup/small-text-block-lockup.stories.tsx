import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@local/icons'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Link } from '@local/ui/Link'
import { RichText } from '@local/ui/RichText'
import { Text } from '@local/ui/Text'

import type { SmallTextBlockLockupProps } from './small-text-block-lockup'
import { SmallTextBlockLockup } from './small-text-block-lockup'

const Component: Meta<SmallTextBlockLockupProps> = {
  args: {
    description: (
      <RichText
        className="cms-html-child"
        content="<p>Rich text description here</p>"
      />
    ),
    eyebrow: <Eyebrow>Eyebrow Here</Eyebrow>,
    heading: (
      <Heading className="font-sans font-bold" display="base">
        Heading/Title Here
      </Heading>
    ),
    imageSrc: 'https://picsum.photos/250/250',
    link: (
      <Link arrowDirection="right" href="#">
        Learn More
      </Link>
    ),
  },
  argTypes: {},
  component: SmallTextBlockLockup,
  parameters: {},
  title: 'Blocks/Small Text Block Lockup',
}

export default Component

type Story = StoryObj<SmallTextBlockLockupProps>

export const Default: Story = {
  args: {},
  name: 'Small Text Block Lockup',
}

export const AsIcon: Story = {
  args: {
    asIcon: true,
    iconSrc: <Icon name="CloseIcon" />,
  },
}

export const AsImage: Story = {
  args: {
    asImage: true,
  },
}

export const AsEyebrow: Story = {
  args: {
    asEyebrow: true,
  },
}

export const AsCheckmark: Story = {
  args: {
    asCheckmark: true,
  },
}

export const Centered: Story = {
  args: {
    textAlign: 'center',
  },
}

export const AsStat: Story = {
  args: {
    asEyebrow: false,
    asStat: true,
    statDisplay: (
      <Text className="text-sharedKellyGreen text-statLarge">75%+</Text>
    ),
  },
}

export const WithAll: Story = {
  args: {
    asEyebrow: true,
    asImage: true,
    link: (
      <Link arrowDirection="right" href="#">
        Learn More
      </Link>
    ),
  },
}
