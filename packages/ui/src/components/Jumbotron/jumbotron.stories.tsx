import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@local/ui/Button'
import { ButtonLink } from '@local/ui/ButtonLink'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import type { JumbotronProps } from './jumbotron'
import { Jumbotron } from './jumbotron'

const Component: Meta<typeof Jumbotron> = {
  args: {} satisfies Partial<JumbotronProps>,
  argTypes: {},
  component: Jumbotron,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Blocks/Jumbotron',
}

export default Component

type Story = StoryObj<typeof Jumbotron>

export const TextSectionBreakBanner: Story = {
  args: {
    backgroundImage: new URL(
      'https://source.unsplash.com/1600x900/?nature,water',
    ),
    className: 'bg-blend-screen',
    heading: (
      <Heading as="h4">
        Get started risk-free with our 30-day money back guarantee.
      </Heading>
    ),
  },
}

export const TextSectionBreak: Story = {
  args: {
    background: 'site',
    body: (
      <Text>
        Access and updates UNTIL YOU PRESS with our Multiple Testing Season
        Guarantee. If for any reason you are unsatisfied, you may request a full
        refund of any items purchased directly from us within 30-days of the
        date of initial purchase.
      </Text>
    ),
    heading: (
      <Heading as="h4">
        Get started risk-free with our 30-day money back guarantee.
      </Heading>
    ),
  },
}

export const TextSectionBreakWithButtons: Story = {
  args: {
    background: 'primaryLight',
    body: (
      <Text>
        Access and updates UNTIL YOU PRESS with our Multiple Testing Season
        Guarantee. If for any reason you are unsatisfied, you may request a full
        refund of any items purchased directly from us within 30-days of the
        date of initial purchase.
      </Text>
    ),
    buttons: (
      <>
        <Button key="default">Start free trial</Button>
        <ButtonLink href="https://google.com" key="outline">
          Learn more
        </ButtonLink>
      </>
    ),
    heading: (
      <Heading as="h4">
        Get started risk-free with our 30-day money back guarantee.
      </Heading>
    ),
  },
}
export const TextSectionBreakWithEyebrow: Story = {
  args: {
    background: 'site',
    body: (
      <Text>
        While not as tough as the Series 7, the most common mistake made on
        Series 63 is underestimating it — which means under-studying and
        failing. You need a prep course that ensures that will not be you. Our
        test prep focuses on understanding, not memorization. Experience it for
        yourself.
      </Text>
    ),
    eyebrow: <Eyebrow>Series 63 Prep Packages</Eyebrow>,
    heading: (
      <Heading as="h3">
        Be confident, fully prepared, and ready to pass.
      </Heading>
    ),
  },
}
