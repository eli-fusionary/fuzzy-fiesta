'use client'

import type { ComponentProps, FC, ReactElement } from 'react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

import type { ButtonLink } from '@local/ui/ButtonLink'
import type { Heading } from '@local/ui/Heading'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { Section } from '@local/ui/Section'

export type TextWithVideoProps = {
  body?: ReactElement<typeof Text>
  buttons?: ReactElement<typeof ButtonLink>[]
  heading?: ReactElement<typeof Heading>
  invert?: boolean
  source?: string
} & ComponentProps<'div'>

export const TextWithVideo: FC<TextWithVideoProps> = ({
  body,
  buttons,
  className,
  heading,
  invert,
  source,
}) => {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    setHasWindow(typeof globalThis !== 'undefined')
  }, [])

  return (
    <Section background="white">
      <Constrainer
        className={cn('px-4xl py-3xl max-lg:px-sm', className)}
        mode="defaultWithoutPadding"
      >
        <Flex
          className={cn(
            'w-full gap-x-3xl gap-y-2xl md:flex-row',
            invert && 'flex-col-reverse md:flex-row-reverse',
          )}
          direction="column"
          items="center"
        >
          {hasWindow ? (
            <ReactPlayer
              loop
              muted
              playing
              url={source}
              volume={0}
              width="100%"
              wrapper={({ children }) => (
                <Flex
                  className="h-[360px] w-full lg:w-[640px]"
                  items="center"
                  justify="center"
                >
                  {children}
                </Flex>
              )}
            />
          ) : (
            <Flex
              className="h-[360px] w-full lg:w-[640px]"
              items="center"
              justify="center"
            />
          )}
          <Flex className="w-full lg:w-1/2" direction="column" justify="center">
            <Flex
              className="gap-xl text-base leading-5 max-md:max-w-full"
              direction="column"
              justify="center"
            >
              <Flex
                className="gap-textSpacingLg"
                direction="column"
                justify="center"
              >
                {heading}
                {body}
              </Flex>
              <Flex
                className="gap-xs md:flex-row"
                direction="column"
                justify="start"
              >
                {buttons}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Constrainer>
    </Section>
  )
}
