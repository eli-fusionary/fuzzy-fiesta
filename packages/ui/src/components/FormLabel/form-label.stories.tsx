import type { Meta, StoryObj } from '@storybook/react'

import type { FormLabelProps } from './form-label'
import { FormLabel } from './form-label'

const Component: Meta<typeof FormLabel> = {
  args: {} satisfies FormLabelProps,
  component: FormLabel,
  title: 'Forms/Label',
}

export default Component

type Story = StoryObj<typeof FormLabel>

export const Default: Story = {
  args: {
    children: 'Example label',
  },
  name: 'Label',
}
