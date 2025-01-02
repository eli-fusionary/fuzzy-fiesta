import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '@local/svg/Logo'

import type { InputProps } from './input'
import { Input } from './input'

const Component: Meta<typeof Input> = {
  args: {
    placeholder: 'Placeholder text',
  } satisfies InputProps,
  argTypes: {
    leadingContent: {
      table: {
        disable: true,
      },
    },
    trailingContent: {
      table: {
        disable: true,
      },
    },
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  title: 'Forms/Input',
}

export default Component

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {},
}

export const LeadingContent: Story = {
  args: {
    leadingContent: <Logo height="100%" width="100%" />,
  },
  name: 'With Leading Content',
}

export const TrailingContent: Story = {
  args: {
    trailingContent: <Logo height="100%" width="100%" />,
  },
  name: 'With Trailing Content',
}

export const LeadingAndTrailing: Story = {
  args: {
    leadingContent: <Logo height="100%" width="100%" />,
    trailingContent: <Logo height="100%" width="100%" />,
  },
  name: 'With Leading & Trailing Content',
}
