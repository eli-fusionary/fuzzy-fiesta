import type { ReactNode } from 'react'
import type {
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

import { FormField } from '@local/ui/FormField'
import { FormItem } from '@local/ui/FormItem'

import { FormSelect } from './form-select'

export type FormSelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  children:
    | ((
        field: Omit<ControllerRenderProps<TFieldValues, TName>, 'ref'>,
      ) => ReactNode)
    | ReactNode
  className?: string
  label?: string
} & Omit<ControllerProps<TFieldValues, TName>, 'render'>

export const FormSelectField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  className,
  label,
  ...props
}: FormSelectFieldProps<TFieldValues, TName>) => (
  <FormField
    {...props}
    render={({ field: { ref: _ref, ...field } }) => (
      <FormItem className={className} label={label}>
        <FormSelect {...field}>{children}</FormSelect>
      </FormItem>
    )}
  />
)
