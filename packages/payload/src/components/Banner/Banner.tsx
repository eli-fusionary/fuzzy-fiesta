import type { FC } from 'react'

import type { BannerProps as BannerComponentProps } from '@local/ui/Banner'
import { Banner as BannerComponent } from '@local/ui/Banner'

type BannerProps = {
  kind?: BannerComponentProps['kind']
  text?: string
}

export const Banner: FC<BannerProps> = props => {
  const { kind, text } = props

  return <BannerComponent kind={kind} text={text} />
}
