import type { EmblaCarouselType } from 'embla-carousel'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { EmblaNavButton } from './embla-nav-button'

type UsePrevNextButtonsType = {
  nextBtnDisabled: boolean
  onNextButtonClick: () => void
  onPrevButtonClick: () => void
  prevBtnDisabled: boolean
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  }
}

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = props => {
  return <EmblaNavButton navIcon={<ArrowLeft size={20} />} {...props} />
}

export const NextButton: React.FC<PropType> = props => {
  return <EmblaNavButton navIcon={<ArrowRight size={20} />} {...props} />
}
