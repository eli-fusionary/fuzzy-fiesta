import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '@local/svg/Logo'
import { Heading } from '@local/ui/Heading'
import { PageSection } from '@local/ui/PageSection'
import { Text } from '@local/ui/Text'

const Component: Meta<typeof PageSection> = {
  args: {
    backgroundShape: <Logo />,
    body: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maiores
        ipsum laboriosam quam quae cupiditate iusto libero consequatur fuga
        optio tempore commodi iste quia, nemo illum dicta nihil quos quo
        deleniti? Fuga praesentium laborum enim ipsum dolore similique,
        repudiandae nemo consequuntur, quae voluptatum veniam! Provident dicta
        nesciunt obcaecati? Incidunt, dolores?
      </Text>
    ),
    heading: (
      <Heading as="h4">Interested in Partnering with Pass Perfect?</Heading>
    ),
  },
  argTypes: {},
  component: PageSection,
  parameters: {},
  title: 'Blocks/Page Section',
}
export default Component

type Story = StoryObj<typeof PageSection>
export const Default: Story = {
  args: {},
  name: 'Page Section',
}

export const WithBackground: Story = {
  args: {
    contentOnTop: false,
  },
  name: 'Page Section with content on left',
}
