import type { ComponentProps, FC, ReactElement } from 'react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import type { Button } from '@local/ui/Button'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { RichText } from '@local/ui/RichText'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { Heading } from '@local/ui/Heading'
import { Section } from '@local/ui/Section'

export type SlideContent = {
  body?: ReactElement<typeof Text>
  button?: ReactElement<typeof Button>
  eyebrow?: ReactElement<typeof Eyebrow>
  heading: ReactElement<typeof Heading> | ReactElement<typeof RichText>
}

export type HeroProps = {
  backgroundColor: SectionProps['background']
  backgroundShape?: ReactElement
  imageDescription: string
  imageSrc: string
  paddingTop?: boolean
  showImageFirst?: boolean
  slides: SlideContent[]
} & ComponentProps<'div'>

export const Hero: FC<HeroProps> = ({
  backgroundColor,
  backgroundShape,
  className,
  imageDescription,
  imageSrc,
  paddingTop,
  showImageFirst = false,
  slides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isSlider = slides.length > 1

  const handlePreviousSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : slides.length - 1,
    )
  }
  const handleNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0,
    )
  }

  const currentSlide = slides[currentIndex]

  return (
    <Section background={backgroundColor}>
      <Constrainer mode="defaultWithoutPadding">
        <Flex
          className={cn(
            'relative gap-4 overflow-hidden',
            'max-xl:px-lg max-lg:px-md',
            showImageFirst
              ? 'pl-2xl pr-4xl lg:flex-row-reverse'
              : 'pl-4xl pr-2xl lg:flex-row',
            isSlider && 'pt-md',
            className,
          )}
          direction="column"
          items="center"
          justify="between"
        >
          <Flex
            className={cn(
              'z-10 py-2xl lg:max-w-[400px] xl:max-w-[500px]',
              (currentSlide?.button ?? isSlider) && 'gap-xl',
            )}
            items="start"
          >
            <Flex className="gap-textSpacingLg" items="start" self="stretch">
              <Flex className="gap-textSpacingSm" items="start" self="stretch">
                {currentSlide?.eyebrow}
                {currentSlide?.heading}
              </Flex>
              {currentSlide?.body}
            </Flex>
            {currentSlide?.button}
            {isSlider && (
              <Flex
                direction="row"
                items="center"
                justify="between"
                self="stretch"
              >
                <Flex className="max-w-[50px]" direction="row" items="center">
                  <Heading as="h4" className="text-white">
                    0{currentIndex + 1}
                  </Heading>
                  <Heading as="h4" className="text-white" display="base">
                    /0{slides.length}
                  </Heading>
                </Flex>
                <Flex className="gap-xs" direction="row" items="center">
                  <button
                    className="flex items-center justify-center rounded-full border border-white p-[9px] text-white shadow-sm"
                    onClick={handlePreviousSlide}
                    type="button"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="flex items-center justify-center rounded-full border border-white p-[9px] text-white shadow-sm"
                    onClick={handleNextSlide}
                    type="button"
                  >
                    <ChevronRight size={20} />
                  </button>
                </Flex>
              </Flex>
            )}
          </Flex>
          <div className="absolute right-[19rem] z-0 translate-y-40 scale-[2.0] opacity-10">
            {backgroundShape}
          </div>
          <img
            alt={imageDescription}
            className={cn(
              'z-10 grow-[0.25] self-center lg:self-end',
              paddingTop && 'pt-lg',
            )}
            src={imageSrc}
          />
        </Flex>
      </Constrainer>
    </Section>
  )
}
