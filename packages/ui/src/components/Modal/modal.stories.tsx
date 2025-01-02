import type { Meta, StoryObj } from '@storybook/react'

import { RichText } from '@local/ui/RichText'

import { Modal } from './modal'

const Component: Meta<typeof Modal> = {
  args: {
    body: (
      <RichText
        background="none"
        className="cms-html-child text-center text-body"
        content="50%+ of today’s CFP® professionals have earned their marks with us:
      Based on the number of CFP® professionals we’ve educated through Dalton
      Education CFP® certification programs and Money Education textbooks,
      used in 200 universities nationwide."
      />
    ),
  },
  argTypes: {},
  component: Modal,
  parameters: {},
  title: 'Blocks/Modal',
}

export default Component

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
  name: 'Modal',
}
