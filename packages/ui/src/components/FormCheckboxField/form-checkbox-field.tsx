import type { PropsWithChildren } from 'react'
import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'

import { FormField } from '@local/ui/FormField'
import { FormItem } from '@local/ui/FormItem'

import { FormCheckbox } from './form-checkbox'

export type FormCheckboxFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = PropsWithChildren<Omit<ControllerProps<TFieldValues, TName>, 'render'>>

export const FormCheckboxField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  ...props
}: FormCheckboxFieldProps<TFieldValues, TName>) => (
  <FormField
    {...props}
    render={({ field }) => (
      <FormItem>
        <FormCheckbox {...field}>{children}</FormCheckbox>
      </FormItem>
    )}
  />
)
