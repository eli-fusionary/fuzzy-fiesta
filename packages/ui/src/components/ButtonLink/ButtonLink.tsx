import type { ComponentProps, FC } from 'react'
import NextLink from 'next/link'

import type { ButtonProps } from '@local/ui/Button'
import { Button } from '@local/ui/Button'
import { cn } from '@local/ui/cn'

import { ButtonLinkArrow } from './ButtonLinkArrow'

export type ButtonLinkProps = {
  kind?: ButtonProps['kind']
  shape?: ButtonProps['shape']
  size?: ButtonProps['size']
} & ComponentProps<typeof NextLink>

export const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  className,
  kind,
  shape,
  size,
  ...rest
}) => {
  return (
    <Button
      asChild
      className={cn(className, 'group relative gap-0')}
      kind={kind}
      shape={shape}
      size={size}
    >
      <NextLink {...rest}>
        <span className="relative translate-x-2 duration-300 group-hover:-translate-x-1">
          {children}
        </span>
        <ButtonLinkArrow />
      </NextLink>
    </Button>
  )
}
