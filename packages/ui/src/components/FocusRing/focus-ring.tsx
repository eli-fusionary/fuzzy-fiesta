import type { ClassProp } from 'class-variance-authority/types'
import type { FC, PropsWithChildren } from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@local/ui/cn'

import type { FocusRingVariantsProps } from './focus-ring.variants'
import { focusRing } from './focus-ring.variants'

export type FocusRingProps = PropsWithChildren<
  {
    keyboard?: boolean
    mouse?: boolean
  } & ClassProp &
    FocusRingVariantsProps
>

export const FocusRing: FC<FocusRingProps> = ({
  children,
  className,
  color,
  keyboard = false,
  mouse = false,
}) => {
  const classes = cn(
    {
      'enabled:focus:ring-2 enabled:focus:ring-offset-2': mouse,

      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2':
        keyboard,
    },
    focusRing({ className, color }),
  )

  return <Slot className={classes}>{children}</Slot>
}
