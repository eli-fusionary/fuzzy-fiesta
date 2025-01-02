import type { Meta, StoryObj } from '@storybook/react'

import { DataContainer } from './data-container'

const Component: Meta = {
  args: {
    children: <p>The string is valid and not empty.</p>,
    data: 'Hello, world!',
  },
  component: DataContainer,
  parameters: {},
  title: 'Components/DataContainer',
}

export default Component

type Story = StoryObj<typeof DataContainer>

export const Default: Story = {
  args: {
    children: <p>The array is valid and not empty.</p>,
    data: [1, 2, 3],
  },
}

export const BooleanTrue: Story = {
  args: {
    children: <p>The boolean is true.</p>,
    data: true,
  },
}

export const NonEmptyString: Story = {
  args: {
    children: <p>The string is valid and not empty.</p>,
    data: 'Hello, world!',
  },
}

export const ValidNumber: Story = {
  args: {
    children: <p>The number is valid.</p>,
    data: 42,
  },
}

export const ValidObject: Story = {
  args: {
    children: <p>The object is valid.</p>,
    data: { key: 'value' },
  },
}

export const KeyExists: StoryObj<typeof DataContainer<{ key: string }>> = {
  args: {
    children: <p>The object contains the key &apos;key&apos;.</p>,
    data: { key: 'value' },
    keyExists: 'key',
  },
}

export const StringContains: Story = {
  args: {
    children: <p>The string contains &apos;world&apos;.</p>,
    data: 'Hello, world!',
    stringContains: 'world',
  },
}

export const IsEmptyObject: Story = {
  args: {
    children: <p>The object is empty.</p>,
    data: {},
    isEmpty: true,
  },
}

export const IsEmptyArray: Story = {
  args: {
    children: <p>The array is empty.</p>,
    data: [],
    isEmpty: true,
  },
}

export const IsEmptyString: Story = {
  args: {
    children: <p>The string is empty.</p>,
    data: '',
    isEmpty: true,
  },
}

export const ExactMatch: Story = {
  args: {
    children: <p>The string matches the exact value.</p>,
    data: 'Hello, world!',
    exact: 'Hello, world!',
  },
}

export const ExactMismatch: Story = {
  args: {
    children: (
      <p>This will not be rendered because the value does not match.</p>
    ),
    data: 'Hello, world!',
    exact: 'Goodbye, world!',
  },
}
