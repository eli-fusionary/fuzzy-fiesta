import type { FC, ReactElement } from 'react'

import type { Accordion } from '@local/ui/Accordion'
import type { Jumbotron } from '@local/ui/Jumbotron'
import type { SectionProps } from '@local/ui/Section'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { Section } from '@local/ui/Section'

export type AccordionSectionProps = {
  accordions: ReactElement<typeof Accordion>[]
  background?: SectionProps['background']
  jumbotron: ReactElement<typeof Jumbotron>
}

export const AccordionSection: FC<AccordionSectionProps> = ({
  accordions,
  background,
  jumbotron,
}) => {
  return (
    <Section background={background}>
      <Constrainer mode="defaultWithoutPadding">
        <div className="px-4xl py-3xl max-lg:px-sm">
          <Flex
            className="flex-1 gap-lg rounded-sm bg-white p-2xl shadow-lg"
            items="start"
          >
            {jumbotron}
            <Flex className="gap-md" self="stretch">
              {accordions.map(accordion => accordion)}
            </Flex>
          </Flex>
        </div>
      </Constrainer>
    </Section>
  )
}
