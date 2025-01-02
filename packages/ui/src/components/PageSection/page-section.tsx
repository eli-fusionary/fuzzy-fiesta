import type { EmblaOptionsType } from 'embla-carousel'
import type { ComponentProps, FC, ReactElement, ReactNode } from 'react'
import { Fragment, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import type { Badge } from '@local/ui/Badge'
import type { Button } from '@local/ui/Button'
import type { Heading } from '@local/ui/Heading'
import type { Link } from '@local/ui/Link'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { LargeTextLockup } from '@local/ui/LargeTextLockup'
import { Section } from '@local/ui/Section'

import { FilterTab } from './filter-tab'

export type PageSectionProps = {
  backgroundColor?: SectionProps['background']
  backgroundShape?: ReactElement
  badge?: ReactElement<typeof Badge>
  body?: ReactElement<typeof Text>
  contentOnTop?: boolean
  filterCategories?: string[]
  filterFunction?: (selectedCategory: string) => ReactNode[]
  hasFilter?: boolean
  heading: ReactElement<typeof Heading>
  links?: (ReactElement<typeof Button> | ReactElement<typeof Link>)[]
} & ComponentProps<'div'>

export const PageSection: FC<PageSectionProps> = ({
  backgroundColor,
  backgroundShape,
  badge,
  body,
  children,
  contentOnTop = true,
  filterCategories,
  filterFunction,
  hasFilter,
  heading,
  links,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('View All')
  const options: EmblaOptionsType = {
    align: 'start',
    containScroll: false,
  }

  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Section background={backgroundColor}>
      <Constrainer
        className={cn(
          'relative flex gap-xl overflow-hidden p-md md:px-xl md:py-3xl lg:px-3xl',
          contentOnTop && 'flex-col',
        )}
      >
        <LargeTextLockup
          buttons={links}
          className="z-10"
          eyebrow={badge}
          heading={heading}
          supportingText={body}
        />
        {hasFilter ? (
          <>
            <div
              className="z-10 flex items-center justify-center"
              ref={emblaRef}
            >
              <Flex
                className="touch-pan-x gap-sm"
                direction="row"
                self="stretch"
              >
                {[...(filterCategories ?? [])].map((category, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    <FilterTab
                      category={category}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </Fragment>
                ))}
              </Flex>
            </div>
            <div className="z-10 grid gap-md self-stretch sm:grid-cols-2 md:grid-cols-3 md:gap-lg lg:grid-cols-4">
              {filterFunction?.(selectedCategory)}
            </div>
          </>
        ) : (
          <div className="z-10">{children}</div>
        )}
        <div className="absolute bottom-0 left-0 z-0 scale-[2.3] opacity-40">
          {backgroundShape}
        </div>
      </Constrainer>
    </Section>
  )
}
