import type { FC, ReactElement } from 'react'

import type { Eyebrow, EyebrowProps } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Divider } from '@local/ui/Divider'
import { Flex } from '@local/ui/Flex'
import { Section } from '@local/ui/Section'

export type PageHeaderProps = {
  backgroundColor: SectionProps['background']
  backgroundShape?: ReactElement
  heading?: ReactElement<typeof Heading> | ReactElement<typeof Text>
  pageSection1?: ReactElement<typeof Eyebrow>
  pageSection2?: ReactElement<typeof Eyebrow>
}

export const PageHeader: FC<PageHeaderProps> = ({
  backgroundColor,
  backgroundShape,
  heading,
  pageSection1,
  pageSection2,
}) => {
  return (
    <Section background={backgroundColor}>
      <Constrainer
        className="relative overflow-hidden"
        mode="defaultWithoutPadding"
      >
        <Flex
          className={cn(
            'absolute right-[180px] size-[338px] overflow-x-visible opacity-10',
            'max-lg:right-0',
          )}
          items="center"
          justify="center"
        >
          {backgroundShape}
        </Flex>
        <Flex
          className={cn('px-4xl py-lg', 'max-lg:px-sm')}
          direction="column"
          justify="center"
        >
          <Flex className="gap-xs" direction="column" items="start">
            {pageSection1 && (
              <Flex className="gap-xs" direction="row">
                {pageSection1}
                {pageSection2 &&
                  (pageSection2.props as EyebrowProps).children && (
                    <>
                      <Divider
                        className="transparentPrimaryDark"
                        orientation="vertical"
                      />
                      {pageSection2}
                    </>
                  )}
              </Flex>
            )}
            {heading}
          </Flex>
        </Flex>
      </Constrainer>
    </Section>
  )
}
