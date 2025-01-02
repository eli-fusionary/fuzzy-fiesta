import type { EmblaCarouselType } from 'embla-carousel'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '../Button'

type UseDotButtonType = {
  onDotButtonClick: (index: number) => void
  scrollSnaps: number[]
  selectedIndex: number
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    onDotButtonClick,
    scrollSnaps,
    selectedIndex,
  }
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const DotButton: React.FC<PropType> = props => {
  const { children, ...restProps } = props

  return (
    <Button type="button" {...restProps}>
      {children}
    </Button>
  )
}
