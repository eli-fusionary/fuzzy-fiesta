import type { ReactNode } from 'react'
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

import { Flex } from '@local/ui/Flex'
import { Select } from '@local/ui/Select'

export type FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  children:
    | ((
        field: Omit<ControllerRenderProps<TFieldValues, TName>, 'ref'>,
      ) => ReactNode)
    | ReactNode
} & Omit<ControllerRenderProps<TFieldValues, TName>, 'ref'>

export const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  onChange,
  ...field
}: FormSelectProps<TFieldValues, TName>) => {
  return (
    <Flex className="gap-2" direction="row" items="center">
      <Select {...field} onValueChange={onChange}>
        {typeof children === 'function'
          ? children({ ...field, onChange })
          : children}
      </Select>
    </Flex>
  )
}
