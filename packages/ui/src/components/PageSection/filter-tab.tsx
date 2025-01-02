import type { FC } from 'react'

import { Button } from '@local/ui/Button'
import { cn } from '@local/ui/cn'
import { Text } from '@local/ui/Text'

export type FilterTabProps = {
  category: string
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export const FilterTab: FC<FilterTabProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Button
      className={cn(
        'pb-sm',
        selectedCategory === category
          ? 'border-b-4 border-buttonPrimary text-textHeadline'
          : 'text-buttonPrimary',
      )}
      onClick={() => {
        setSelectedCategory(category)
      }}
    >
      <Text className={cn('font-bold leading-[120%] text-inherit')}>
        {category}
      </Text>
    </Button>
  )
}
