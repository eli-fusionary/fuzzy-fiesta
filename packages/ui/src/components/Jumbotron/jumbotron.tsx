import type { FC, ReactElement } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { Badge } from '@local/ui/Badge'
import type { Button } from '@local/ui/Button'
import type { ButtonLink } from '@local/ui/ButtonLink'
import type { ConstrainerProps } from '@local/ui/Constrainer'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { SectionProps } from '@local/ui/Section'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Constrainer } from '@local/ui/Constrainer'

export type JumbotronProps = {
  alignment: 'center' | 'left'
  body?: ReactElement<typeof Text>
  buttons?:
    | ReactElement<typeof Button | typeof ButtonLink>
    | ReactElement<typeof Button | typeof ButtonLink>[]
  constrainerMode?: ConstrainerProps['mode']
  eyebrow?: ReactElement<typeof Badge> | ReactElement<typeof Eyebrow>
  heading: ReactElement<typeof Heading>
  spacing?: '2xl' | '3xl' | '4xl' | '5xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs'
} & SectionProps

export const Jumbotron: FC<JumbotronProps> = ({
  alignment = 'center',
  body,
  buttons,
  children,
  className,
  constrainerMode = 'defaultWithoutPadding',
  eyebrow,
  heading,
  spacing = 'md',
}) => {
  const spacingClass = `gap-${spacing}`
  return (
    <Constrainer className={cn('gap-2xl', className)} mode={constrainerMode}>
      <div
        className={cn(
          'flex flex-col text-center',
          spacingClass,
          alignment === 'left'
            ? 'items-start text-start'
            : 'items-center text-center',
        )}
      >
        {eyebrow}
        {heading}
        <Slot className="max-w-[680px]">{body}</Slot>
      </div>
      {buttons && <div className="flex flex-row gap-x-sm pt-xl">{buttons}</div>}

      {children}
    </Constrainer>
  )
}
