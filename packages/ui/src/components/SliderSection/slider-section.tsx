import type { ComponentProps, FC, ReactElement, ReactNode } from 'react'
import { Children } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { Button } from '@local/ui/Button'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { RichText } from '@local/ui/RichText'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { EmblaCarousel } from '@local/ui/EmblaCarousel'
import { Flex } from '@local/ui/Flex'
import { LargeTextLockup } from '@local/ui/LargeTextLockup'
import { Section } from '@local/ui/Section'

export type SliderSectionProps = {
  backgroundColor: SectionProps['background']
  backgroundShape?: ReactElement
  body?: ReactElement<typeof RichText> | ReactElement<typeof Text>
  button?: ReactElement<typeof Button>
  children?: ReactNode
  eyebrow?: ReactElement<typeof Eyebrow>
  heading: ReactElement<typeof Heading>
} & ComponentProps<'div'>

export const SliderSection: FC<SliderSectionProps> = ({
  backgroundColor,
  backgroundShape,
  body,
  button,
  children,
  eyebrow,
  heading,
}) => {
  const childrenCards = Children.toArray(children).slice(0, 36)

  return (
    <Section background={backgroundColor}>
      <Flex
        className="relative w-full overflow-hidden py-3xl"
        items="start"
        justify="center"
      >
        <Flex
          className="relative z-10 w-full gap-2xl"
          direction="column"
          items="stretch"
          justify="center"
        >
          <EmblaCarousel
            carouselClassName="pl-md lg:pl-3xl"
            child={childrenCards}
            heading={
              <LargeTextLockup
                eyebrow={eyebrow}
                heading={heading}
                supportingText={body}
              />
            }
            options={{
              align: 'start',
              loop: false,
              slidesToScroll: 1,
            }}
          />
          <Slot className="self-center">{button}</Slot>
        </Flex>
        <div className="absolute z-0 -translate-x-96 scale-[2.3] opacity-40">
          {backgroundShape}
        </div>
      </Flex>
    </Section>
  )
}
