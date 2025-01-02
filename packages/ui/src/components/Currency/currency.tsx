import type { FC, ReactNode } from 'react'
import { match, P } from 'ts-pattern'

import type { TextProps } from '@local/ui/Text'
import { Text } from '@local/ui/Text'

export type CurrencyProps = {
  decimalPlaces?: number
  fallbackText?: string
  value?: { currencyCode: string; value: unknown } | number
} & (
  | { renderValue: (value?: string) => ReactNode }
  | ({
      renderValue?: never
    } & Omit<TextProps, 'children'>)
)

export const Currency: FC<CurrencyProps> = ({
  decimalPlaces = 2,
  fallbackText,
  renderValue,
  value,
  ...rest
}) => {
  const numericValue = match(value)
    .with(P.number, value => value)
    .with({ value: P.number }, ({ value }) => value)
    // eslint-disable-next-line unicorn/no-useless-undefined
    .otherwise(() => undefined)

  if (numericValue === undefined) {
    if (renderValue) {
      return renderValue(fallbackText)
    }

    if (fallbackText) {
      return <Text {...rest}>{fallbackText}</Text>
    }

    return null
  }

  const currencyCode = match(value)
    .with({ currencyCode: P.string }, ({ currencyCode }) => currencyCode)
    .otherwise(() => 'USD')

  const displayValue = numericValue.toLocaleString('en-US', {
    currency: currencyCode,
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
    style: 'currency',
  })

  if (renderValue) {
    return renderValue(displayValue)
  }

  return <Text {...rest}>{displayValue}</Text>
}
