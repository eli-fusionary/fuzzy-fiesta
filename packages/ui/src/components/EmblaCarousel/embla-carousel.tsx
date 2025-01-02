'use client'

import type { EmblaOptionsType } from 'embla-carousel'
import type { FC, ReactElement, ReactNode } from 'react'
import { Children } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { cn } from '@local/ui/cn'
import { Flex } from '@local/ui/Flex'
import { Section } from '@local/ui/Section'

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './embla-carousel-arrow-buttons'

export type EmblaCarouselProps = {
  carouselClassName?: string
  child?: ReactNode
  heading?: ReactElement
  options?: EmblaOptionsType
}

export const EmblaCarousel: FC<EmblaCarouselProps> = ({
  carouselClassName,
  child,
  heading,
  options,
}) => {
  const defaultOptions: EmblaOptionsType = {
    align: 'start',
    loop: false,
    slidesToScroll: 1,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options ?? defaultOptions)

  const carouselClass = carouselClassName ?? ''

  const {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled,
  } = usePrevNextButtons(emblaApi)
  const validatedChildren = Children.toArray(child).slice(0, 36)

  return (
    <Section className="w-full max-md:max-w-full">
      <Flex
        className="gap-xl px-3xl max-md:flex-col max-md:px-md"
        direction="row"
      >
        {heading}
        <Flex className="gap-sm md:ml-auto" direction="row" items="center">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </Flex>
      </Flex>
      <div className={cn('pt-xl md:pt-3xl', carouselClass)} ref={emblaRef}>
        <Flex className="touch-pan-y gap-md" direction="row">
          {validatedChildren.map((children, index) => {
            const child = children as ReactElement
            return (
              <div
                className="cursor-pointer"
                key={child.key}
                role="button"
                tabIndex={index}
              >
                {children}
              </div>
            )
          })}
        </Flex>
      </div>
    </Section>
  )
}
