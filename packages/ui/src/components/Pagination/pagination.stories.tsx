import type { Meta, StoryObj } from '@storybook/react'

import type { PaginationProps } from './pagination'
import { Pagination } from './pagination'
import { PaginationContent } from './pagination-content'
import { PaginationEllipsis } from './pagination-ellipsis'
import { PaginationItem } from './pagination-item'
import { PaginationLink } from './pagination-link'
import { PaginationNext } from './pagination-next'
import { PaginationPrevious } from './pagination-previous'

const Component: Meta<PaginationProps> = {
  argTypes: {},
  component: Pagination,
  parameters: {},
  title: 'Navigation/Pagination',
}

export default Component

type Story = StoryObj<PaginationProps>

const PaginationSample = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          8
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">9</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">10</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)

export const Default: Story = {
  args: {
    children: <PaginationSample />,
  },
  name: 'Pagination',
}
