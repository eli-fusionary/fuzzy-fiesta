import type { FC, ReactNode } from 'react'

import type { FlexProps } from '@local/ui/Flex'
import { Flex } from '@local/ui/Flex'

import type { BannerVariantsProps } from './banner.variants'
import { banner } from './banner.variants'

export type BannerProps = {
  text: ReactNode
} & BannerVariantsProps &
  FlexProps

export const Banner: FC<BannerProps> = props => {
  const { children, className, kind, text, ...rest } = props

  return (
    <Flex className={banner({ className, kind })} items="center" {...rest}>
      <p className="text-sm leading-6">{text}</p>
      <div className="flex flex-1 justify-end">{children}</div>
    </Flex>
  )
}
