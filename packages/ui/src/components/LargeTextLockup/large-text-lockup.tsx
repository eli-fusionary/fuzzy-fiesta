import type { ComponentProps, FC, ReactElement } from 'react'

import type { Badge } from '@local/ui/Badge'
import type { Button } from '@local/ui/Button'
import type { ButtonLink } from '@local/ui/ButtonLink'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { Link } from '@local/ui/Link'
import type { RichText } from '@local/ui/RichText'
import type { Text } from '@local/ui/Text'
import { cn } from '@local/ui/cn'
import { Flex } from '@local/ui/Flex'

export type LargeTextLockupProps = {
  alignment?: 'center' | 'left'
  buttons?: (
    | ReactElement<typeof Button>
    | ReactElement<typeof ButtonLink>
    | ReactElement<typeof Link>
  )[]
  eyebrow?: ReactElement<typeof Badge> | ReactElement<typeof Eyebrow>
  heading: ReactElement<typeof Heading> | ReactElement<typeof Text>
  headingContainerClassName?: string
  supportingText?: ReactElement<typeof RichText> | ReactElement<typeof Text>
} & ComponentProps<'div'>

export const LargeTextLockup: FC<LargeTextLockupProps> = ({
  alignment = 'left',
  buttons,
  className,
  eyebrow,
  heading,
  headingContainerClassName,
  supportingText,
}) => {
  const hasButtons = buttons && buttons.length > 0

  return (
    <Flex
      className={cn(
        'max-w-[680px] flex-1 gap-xl',
        hasButtons && 'gap-xl',
        className,
      )}
    >
      <Flex
        className={cn(
          'gap-textSpacingLg',
          alignment === 'left'
            ? 'items-start text-start'
            : 'items-center text-center',
          headingContainerClassName,
        )}
      >
        <Flex className="gap-textSpacingSm">
          {eyebrow && (
            <Flex
              className={cn(
                'gap-xs',
                alignment === 'center' && 'justify-center',
              )}
              direction="row"
              items="center"
            >
              {eyebrow}
            </Flex>
          )}
          {heading}
        </Flex>
        {supportingText}
      </Flex>
      {hasButtons ? (
        <Flex
          className={cn(
            'gap-sm sm:flex-row',
            alignment === 'left' ? 'justify-start' : 'justify-center',
          )}
          items="center"
          self="stretch"
        >
          {buttons.slice(0, 2).map(button => button)}
        </Flex>
      ) : null}
    </Flex>
  )
}
