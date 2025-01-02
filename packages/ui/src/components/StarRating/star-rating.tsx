import type { FC } from 'react'

import { Icon } from '@local/icons'

export type StarRatingProps = {
  color?: string
  stars: number
}

export const StarRating: FC<StarRatingProps> = ({ color, stars }) => {
  const fullStars = Math.floor(stars)
  const hasHalfStar = stars % 1 !== 0

  return (
    <div className="relative inline-flex items-center rounded-[6px] bg-grey1 p-xs">
      <div className="flex flex-row items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => {
          if (index < fullStars) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Icon color={color} key={index} name="Star" strokeWidth={0} />
            )
          }
          if (index === fullStars && hasHalfStar) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Icon color={color} key={index} name="StarHalf" strokeWidth={0} />
            )
          }
        })}
      </div>
      <div className="absolute inset-0 flex flex-row items-center justify-center">
        {Array.from({ length: 5 }, () => (
          // eslint-disable-next-line react/jsx-key
          <Icon fill="#111" name="Star" strokeWidth={0} />
        ))}
      </div>
    </div>
  )
}
