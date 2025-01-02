import type { FC, PropsWithChildren, ReactNode } from 'react'
import { format as fnsFormat } from 'date-fns'
import { match, P } from 'ts-pattern'

import type { TextProps } from '@local/ui/Text'
import { Text } from '@local/ui/Text'

export type DateTimeProps = PropsWithChildren<
  {
    fallbackText?: string
    format?: string
    value?: Date | string
  } & (
    | { renderValue: (value?: string) => ReactNode }
    | ({
        renderValue?: never
      } & Omit<TextProps, 'children'>)
  )
>

export const DateTime: FC<DateTimeProps> = ({
  fallbackText,
  format = 'd MMMM yyyy hh:mm',
  renderValue,
  value,
  ...rest
}) => {
  const dateValue = match(value)
    .returnType<Date | undefined>()
    .with(P.string, value => new Date(value))
    // eslint-disable-next-line unicorn/no-useless-undefined
    .with(P.nullish, () => undefined)
    .otherwise(value => value)

  if (dateValue === undefined) {
    if (renderValue) {
      return renderValue(fallbackText)
    }

    if (fallbackText) {
      return <Text {...rest}>{fallbackText}</Text>
    }

    return null
  }

  const displayValue = fnsFormat(dateValue, format)

  if (renderValue) {
    return renderValue(displayValue)
  }

  return <Text {...rest}>{displayValue}</Text>
}
