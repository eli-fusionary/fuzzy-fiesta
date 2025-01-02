import type { FC, MouseEventHandler, ReactElement } from 'react'

import { Button } from '@local/ui/Button'
import { cn } from '@local/ui/cn'

export type EmblaNavButtonProps = {
  disabled?: boolean
  navIcon: ReactElement
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const EmblaNavButton: FC<EmblaNavButtonProps> = ({
  disabled,
  navIcon,
  onClick,
}) => {
  return (
    <Button
      className={cn(
        'z-10 m-0 inline-flex cursor-pointer items-center justify-center rounded-full border-0 p-[9px] text-body disabled:opacity-60',
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {navIcon}
    </Button>
  )
}
