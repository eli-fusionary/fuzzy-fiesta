import type { ComponentProps, CSSProperties, FC } from 'react'
import { deepmerge } from 'deepmerge-ts'

import type { SectionBackgroundProps } from '@local/ui/SectionBackground'
import { SectionBackground } from '@local/ui/SectionBackground'

type VariantProps = Omit<
  SectionBackgroundProps,
  'asChild' | 'class' | keyof ComponentProps<'div'>
>

export type SectionProps = {
  backgroundImage?: URL
} & ComponentProps<'section'> &
  VariantProps

export const Section: FC<SectionProps> = ({
  background,
  backgroundImage,
  style,
  ...rest
}) => {
  const computedStyle: CSSProperties = deepmerge(
    style ?? {},
    backgroundImage
      ? { backgroundImage: `url(${backgroundImage.toString()})` }
      : {},
  )

  return (
    <SectionBackground asChild background={background}>
      <section {...rest} style={computedStyle} />
    </SectionBackground>
  )
}
