import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import parse from 'html-react-parser'

import type { ComponentAsChild } from '@local/types/ComponentAsChild'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'
import { Section } from '@local/ui/Section'

export type RichTextProps = {
  background?: string
  content?: string
  inline?: boolean
  sectionClassName?: string
} & ComponentAsChild &
  ComponentPropsWithoutRef<'div'>

const resolveContent = (value: string, inline: boolean): string => {
  if (!inline) {
    return value.replaceAll('<p></p>', '<div></div>')
  }

  const inlineHtmlString = value.replaceAll(/^<p>|<\/p>$/gi, '')
  return inlineHtmlString.replaceAll('<p></p>', '<div></div>')
}

const RichText = forwardRef<HTMLDivElement, RichTextProps>(
  (
    {
      asChild = false,
      background,
      className = '',
      content,
      inline = false,
      sectionClassName,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'
    const appearance = background ? 'none' : 'site'
    if (!content) {
      return null
    }

    const htmlString = resolveContent(content, inline)

    return (
      <Section background={appearance} className={cn(sectionClassName)}>
        <Constrainer mode="defaultWithoutPadding">
          <Comp ref={ref} {...props} className={cn('cms-html', className)}>
            {parse(htmlString, { trim: true })}
          </Comp>
        </Constrainer>
      </Section>
    )
  },
)

RichText.displayName = 'RichText'

export { RichText }
