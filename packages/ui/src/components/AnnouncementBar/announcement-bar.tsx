import type { FC } from 'react'

import { Text } from '@local/ui/Text'

export type AnnouncementBarProps = {
  text: string
}

export const AnnouncementBar: FC<AnnouncementBarProps> = ({ text }) => {
  return (
    <div className="flex flex-row items-center justify-center bg-accentTertiary px-8 py-xs">
      <Text className="text-white">{text}</Text>
    </div>
  )
}
