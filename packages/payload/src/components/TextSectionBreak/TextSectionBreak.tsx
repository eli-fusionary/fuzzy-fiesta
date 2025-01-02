import type { FC } from 'react'

import type { TextSectionBreakProps as TextSectionBreakComponentProps } from '@local/ui/TextSectionBreak'
import { Eyebrow } from '@local/ui/Eyebrow'
import { Heading } from '@local/ui/Heading'
import { Text } from '@local/ui/Text'
import { TextSectionBreak as TextSectionBreakComponent } from '@local/ui/TextSectionBreak'

type TextSectionBreakProps = {
  alignment?: 'center' | 'left'
  backgroundColor?: TextSectionBreakComponentProps['background']
  children?: TextSectionBreakComponentProps['children']
  eyebrow?: string
  heading: string
  imageSrc?: TextSectionBreakComponentProps['imageSrc']
  supportingText?: string
}

export const TextSectionBreak: FC<TextSectionBreakProps> = ({
  backgroundColor,
  eyebrow,
  heading,
  supportingText,
  ...props
}) => (
  <TextSectionBreakComponent
    background={backgroundColor}
    eyebrow={eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : undefined}
    heading={<Heading>{heading}</Heading>}
    supportingText={supportingText ? <Text>{supportingText}</Text> : undefined}
    {...props}
  />
)
