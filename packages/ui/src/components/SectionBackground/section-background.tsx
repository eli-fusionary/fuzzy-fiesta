import type { ComponentProps, CSSProperties, FC } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { ComponentAsChildGeneric } from '@local/types/ComponentAsChildGeneric'

import type { SectionBackgroundVariantsProps } from './section-background.variants'
import { sectionBackground } from './section-background.variants'

export type SectionBackgroundProps = {
  backgroundImage?: URL
} & ComponentAsChildGeneric<ComponentProps<'div'>> &
  Omit<SectionBackgroundVariantsProps, 'hasBackgroundImage'>

export const SectionBackground: FC<SectionBackgroundProps> = ({
  asChild = false,
  background,
  backgroundImage,
  className,
  ...rest
}) => {
  const style: CSSProperties | undefined = backgroundImage
    ? { backgroundImage: `url(${backgroundImage.toString()})` }
    : undefined

  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={sectionBackground({
        background,
        className,
        hasBackgroundImage: Boolean(backgroundImage),
      })}
      style={style}
      {...rest}
    />
  )
}
