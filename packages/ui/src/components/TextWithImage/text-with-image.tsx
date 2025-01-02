import type { ComponentProps, FC, ReactElement, ReactNode } from 'react'

import type { ButtonLink } from '@local/ui/ButtonLink'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { Link } from '@local/ui/Link'
import type { RichText } from '@local/ui/RichText'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { Accordion } from '@local/ui/Accordion'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { Section } from '@local/ui/Section'

export type TextWithImageProps = {
  accordions?: {
    description: ReactNode
    title: ReactElement<typeof Heading> | ReactElement<typeof Text>
  }[]
  background?: SectionProps['background']
  body?: ReactElement<typeof RichText> | ReactElement<typeof Text>
  eyebrow?: ReactElement<typeof Eyebrow>
  heading?: ReactElement<typeof Heading> | ReactElement<typeof Text>
  imageDescription?: string
  imageSrc?: string
  imageToEdge?: boolean
  invert?: boolean
  links?: (ReactElement<typeof ButtonLink> | ReactElement<typeof Link>)[]
  verticalPadding?: 'default' | 'narrow' | 'none'
} & ComponentProps<'div'>

export const TextWithImage: FC<TextWithImageProps> = ({
  accordions,
  background = 'site',
  body,
  eyebrow,
  heading,
  imageDescription,
  imageSrc,
  imageToEdge,
  invert,
  links,
  verticalPadding = 'default',
}) => (
  <Section background={background}>
    <Constrainer mode="defaultWithoutPadding">
      <Flex
        className={cn(
          'flex-col-reverse gap-2xl max-lg:px-sm lg:flex-row lg:gap-3xl',
          imageToEdge && invert && 'pl-4xl',
          imageToEdge && !invert && 'pr-4xl',
          !imageToEdge && 'px-4xl',
          invert && 'lg:flex-row-reverse lg:justify-end',
          verticalPadding === 'default' && 'py-3xl',
          verticalPadding === 'narrow' && 'py-xs',
          verticalPadding === 'none' && 'py-0',
        )}
        items="center"
      >
        <Flex className="flex-1" items="center" justify="center">
          <Flex
            className={cn('max-h-[610px] shrink-0')}
            direction="row"
            self={invert ? 'end' : 'start'}
          >
            <img
              alt={imageDescription}
              className="object-cover"
              src={imageSrc}
            />
          </Flex>
        </Flex>
        <Flex className="max-w-[680px] flex-1 gap-xl" items="start">
          <Flex className="gap-lg" items="start" self="stretch">
            <Flex className="gap-textSpacingSm" items="start" self="stretch">
              {eyebrow}
              {heading}
            </Flex>
            {body}
          </Flex>
          {accordions?.length ? (
            <Flex className="gap-md" self="stretch">
              {accordions.map((accordion, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Accordion key={index} title={accordion.title}>
                  {accordion.description}
                </Accordion>
              ))}
            </Flex>
          ) : null}
          {links && links.length > 0 && (
            <Flex
              className="gap-4 md:flex-row md:items-center"
              items="start"
              self="stretch"
            >
              {links}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Constrainer>
  </Section>
)
