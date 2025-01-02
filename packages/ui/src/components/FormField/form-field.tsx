import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { createContext, useMemo } from 'react'
import { Controller } from 'react-hook-form'

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

export const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const memoizedValue = useMemo(() => ({ name: props.name }), [props.name])

  return (
    <FormFieldContext.Provider value={memoizedValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}
