'use client'

import type { FC } from 'react'

import type { SectionBackgroundColor } from '@local/payload/helpers/getSectionBackgroundColor'
import { Accordion as AccordionComponent } from '@local/ui/Accordion'
import { AccordionSection } from '@local/ui/AccordionSection'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Jumbotron } from '@local/ui/Jumbotron'
import { RichText } from '@local/ui/RichText'
import { Text } from '@local/ui/Text'

type AccordionChildProps = {
  descriptionHTML?: string
  title: string
}

export type AccordionProps = {
  accordions?: AccordionChildProps[]
  backgroundColor?: SectionBackgroundColor
  eyebrow?: string
  heading: string
  subHeading?: string
}

export const Accordion: FC<AccordionProps> = ({
  accordions,
  backgroundColor,
  eyebrow,
  heading,
  subHeading,
}) => {
  const accordionContents = Array.isArray(accordions) ? accordions : []
  return (
    <AccordionSection
      accordions={accordionContents.map((accordion, index) => (
        <AccordionComponent
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title={<Heading as="h6">{accordion.title}</Heading>}
          topBorder
        >
          <RichText
            background="none"
            className="cms-html-child text-bodySmall"
            content={accordion.descriptionHTML}
          />
        </AccordionComponent>
      ))}
      background={backgroundColor}
      jumbotron={
        <Jumbotron
          alignment="left"
          body={subHeading ? <Text>{subHeading}</Text> : undefined}
          eyebrow={eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : undefined}
          heading={<Heading as="h3">{heading}</Heading>}
          spacing="xs"
        />
      }
    />
  )
}
