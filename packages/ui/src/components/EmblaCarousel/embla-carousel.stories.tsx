import type { Meta, StoryObj } from '@storybook/react'
import type { EmblaOptionsType } from 'embla-carousel'

import type { EmblaCarouselProps } from './embla-carousel'
import { EmblaCarousel } from './embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }

const Component: Meta<typeof EmblaCarousel> = {
  args: {
    options: OPTIONS,
  } satisfies EmblaCarouselProps,
  argTypes: {},
  component: EmblaCarousel,
  title: 'Blocks/Embla Carousel',
}

export default Component

type Story = StoryObj<typeof EmblaCarousel>

export const Default: Story = {
  args: {},
  name: 'Embla Carousel',
}
