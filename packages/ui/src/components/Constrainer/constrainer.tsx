import type { ComponentProps, FC } from 'react'

import type { ConstrainerVariantsProps } from './constrainer.variants'
import { constrainer } from './constrainer.variants'

export type ConstrainerProps = ComponentProps<'div'> & ConstrainerVariantsProps

export const Constrainer: FC<ConstrainerProps> = ({
  children,
  className,
  mode,
  ...rest
}) => (
  <div className={constrainer({ className, mode })} {...rest}>
    {children}
  </div>
)
