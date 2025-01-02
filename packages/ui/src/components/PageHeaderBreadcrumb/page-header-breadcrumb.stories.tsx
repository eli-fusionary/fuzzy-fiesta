import type { Meta, StoryObj } from '@storybook/react'

import { PageHeaderBreadcrumb } from './page-header-breadcrumb'

const Component: Meta<typeof PageHeaderBreadcrumb> = {
  args: {
    items: [
      { label: 'Home', link: 'https://google.com/' },
      { label: 'Products', link: 'https://google.com/' },
      { label: 'Category', link: 'https://google.com/' },
      { label: 'Product Details', link: '' },
    ],
    size: 'default',
  },
  argTypes: {},
  component: PageHeaderBreadcrumb,
  parameters: {},
  title: 'Blocks/Page Header Breadcrumb',
}

export default Component

type Story = StoryObj<typeof PageHeaderBreadcrumb>
export const Default: Story = {
  args: {},
  name: 'Page Header Breadcrumb',
}

export const Large: Story = {
  args: {
    size: 'large',
  },
  name: 'Page Header Breadcrumb large',
}
