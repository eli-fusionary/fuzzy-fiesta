import type { Meta, StoryObj } from '@storybook/react'

import { ButtonLink } from '@local/ui/ButtonLink'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'

import { TextWithVideo } from './text-with-video'

const Component: Meta<typeof TextWithVideo> = {
  args: {
    body: (
      <Text>
        Ensure professional and organizational growth with leading-edge content
        and proven results from our experts brands
      </Text>
    ),
    buttons: [
      // eslint-disable-next-line react/jsx-key
      <ButtonLink href="https://www.google.com">Teams</ButtonLink>,
      // eslint-disable-next-line react/jsx-key
      <ButtonLink href="https://www.google.com" kind="outline">
        Individuals
      </ButtonLink>,
    ],
    heading: (
      <Heading as="h3">
        Learning programs Powered by the best brands in the industry
      </Heading>
    ),
    invert: false,
    source:
      'https://cdn.builder.io/o/assets%2Faae6c93118b04bd9808ce93b5c8c3af8%2F2a4cfabfe1c1442eb5fc9f1b08ead942%2Fcompressed?apiKey=aae6c93118b04bd9808ce93b5c8c3af8&token=2a4cfabfe1c1442eb5fc9f1b08ead942&alt=media&optimized=true',
  },
  argTypes: {},
  component: TextWithVideo,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Blocks/Text With Video',
}

export default Component

type Story = StoryObj<typeof TextWithVideo>

export const Default: Story = {
  args: {},
  name: 'Text With Video',
}
