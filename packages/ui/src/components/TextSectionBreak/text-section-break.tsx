import type { FC, ReactNode } from 'react'

import type { LargeTextLockupProps } from '@local/ui/LargeTextLockup'
import type { SectionProps } from '@local/ui/Section'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Flex } from '@local/ui/Flex'
import { LargeTextLockup } from '@local/ui/LargeTextLockup'
import { Section } from '@local/ui/Section'

export type TextSectionBreakProps = {
  background?: SectionProps['background']
  children?: ReactNode
  imageSrc?: string
  textContentLeft?: boolean
} & LargeTextLockupProps

export const TextSectionBreak: FC<TextSectionBreakProps> = ({
  background,
  children,
  imageSrc,
  textContentLeft,
  ...largeTextLockupProps
}) => (
  <Section
    background={background}
    className={cn('relative bg-blend-multiply', imageSrc && 'bg-black')}
  >
    {imageSrc && (
      <img
        alt=""
        className="absolute left-0 top-0 size-full object-cover opacity-50"
        src={imageSrc}
      />
    )}
    <Constrainer mode="defaultWithoutPadding">
      <Flex
        className={cn(
          'relative w-full gap-xl py-3xl max-lg:items-start max-lg:px-sm lg:px-5xl',
          textContentLeft && 'items-start xl:flex-row',
          imageSrc ? 'text-white' : '',
          children ? 'gap-xl' : 'gap-sm',
        )}
        direction="column"
        items="center"
        justify="center"
      >
        <LargeTextLockup {...largeTextLockupProps} className="max-w-none" />
        {children}
      </Flex>
    </Constrainer>
  </Section>
)
