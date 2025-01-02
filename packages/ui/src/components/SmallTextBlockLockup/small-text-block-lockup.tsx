'use client'

import type { ComponentProps, FC, ReactElement } from 'react'
import { useMemo, useState } from 'react'
import { Slot } from '@radix-ui/react-slot'

import type { Badge } from '@local/ui/Badge'
import type { ButtonLink } from '@local/ui/ButtonLink'
import type { Eyebrow } from '@local/ui/Eyebrow'
import type { Heading } from '@local/ui/Heading'
import type { Link } from '@local/ui/Link'
import type { RichText } from '@local/ui/RichText'
import type { Text } from '@local/ui/Text'
import { Icon } from '@local/icons'
import { cn } from '@local/ui/cn'
import { Flex } from '@local/ui/Flex'
import { Modal } from '@local/ui/Modal'
import { StarRating } from '@local/ui/StarRating'

export type SmallTextBlockLockupProps = {
  additionalInfo?: ReactElement<typeof RichText>
  asCard?: boolean | undefined
  asCheckmark?: boolean | undefined
  asEyebrow?: boolean | undefined
  asIcon?: boolean | undefined
  asImage?: boolean | undefined
  asStat?: boolean | undefined
  description: ReactElement<typeof RichText> | ReactElement<typeof Text>
  eyebrow?: ReactElement<typeof Badge> | ReactElement<typeof Eyebrow>
  heading?: ReactElement<typeof Heading> | ReactElement<typeof Text>
  iconSrc?: ReactElement<typeof Icon>
  imageDescription?: string
  imageSrc?: string
  link?: ReactElement<typeof ButtonLink> | ReactElement<typeof Link>
  starRating?: number
  statDisplay?: ReactElement<typeof Text>
  subheading?: ReactElement<typeof Heading> | ReactElement<typeof Text>
  textAlign: 'center' | 'left'
} & ComponentProps<'div'>

export const SmallTextBlockLockup: FC<SmallTextBlockLockupProps> = ({
  additionalInfo,
  asCard,
  asCheckmark,
  asEyebrow,
  asIcon,
  asImage,
  asStat,
  className,
  description,
  eyebrow,
  heading,
  iconSrc,
  imageDescription,
  imageSrc,
  link,
  starRating,
  statDisplay,
  subheading,
  textAlign = 'left',
}) => {
  const [showModal, setShowModal] = useState(false)
  const centeredText = textAlign === 'center'

  const { resolvedCheckmark, resolvedIcon, resolvedImage } = useMemo(() => {
    if (asImage) {
      return {
        resolvedCheckmark: false,
        resolvedIcon: false,
        resolvedImage: true,
      }
    }
    return {
      resolvedCheckmark: asCheckmark,
      resolvedIcon: asIcon,
      resolvedImage: asImage,
    }
  }, [asCheckmark, asIcon, asImage])

  return (
    <>
      {additionalInfo && (
        <Modal
          body={additionalInfo}
          onClose={() => {
            setShowModal(false)
          }}
          open={showModal}
        />
      )}
      <Flex
        className={cn(
          'h-full max-w-60 gap-sm',
          centeredText && 'text-center',
          className,
        )}
        items="start"
        justify="between"
      >
        {resolvedImage && (
          <Flex items="start" self="stretch">
            <img
              alt={imageDescription}
              className="size-full self-stretch"
              src={imageSrc}
            />
          </Flex>
        )}
        <Flex
          className={cn('h-full gap-textSpacingLg', asCard && 'gap-md')}
          items="start"
          justify="between"
          self="stretch"
        >
          <Flex
            className={cn('gap-textSpacing', asCard && 'gap-sm')}
            items="start"
            self="stretch"
          >
            <Flex
              className={cn('gap-sm', asCard && 'gap-md')}
              items="start"
              self="stretch"
            >
              {resolvedIcon && (
                <Flex
                  className={cn('size-16', centeredText && 'self-center')}
                  items="center"
                  justify="center"
                >
                  {iconSrc}
                </Flex>
              )}
              <Flex
                className={cn(
                  'gap-textSpacingSm',
                  asCard && 'gap-xs',
                  centeredText && 'items-center',
                )}
                items="start"
                self="stretch"
              >
                <Flex className="relative gap-xs">
                  {additionalInfo && (
                    <button
                      className="absolute -right-4 top-4"
                      onClick={() => {
                        setShowModal(true)
                      }}
                      type="button"
                    >
                      <Icon className="text-grey4" name="InformationCircle" />
                    </button>
                  )}
                  {asEyebrow && eyebrow}
                  {heading && (
                    <Flex className="gap-xs" direction="row" items="center">
                      {resolvedCheckmark && (
                        <Icon
                          className="shrink-0 text-formSuccess"
                          name="CheckIcon"
                        />
                      )}
                      {heading}
                    </Flex>
                  )}
                  {starRating && (
                    <StarRating color="text-emerald-600" stars={starRating} />
                  )}
                </Flex>
                {subheading}
              </Flex>
            </Flex>
            {asStat && (
              <>
                <Flex
                  className={cn(
                    'self-stretch',
                    centeredText && 'justify-center',
                  )}
                  direction="row"
                >
                  {statDisplay}
                </Flex>
              </>
            )}
            {resolvedCheckmark ? (
              <div className="px-[36px]">{description}</div>
            ) : (
              <div className={starRating ? 'mt-1' : ''}>{description}</div>
            )}
          </Flex>
        </Flex>
        <Slot className={centeredText ? 'self-center' : ''}>{link}</Slot>
      </Flex>
    </>
  )
}
