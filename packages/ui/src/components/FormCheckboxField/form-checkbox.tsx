import type { CheckedState } from '@radix-ui/react-checkbox'
import type { PropsWithChildren, Ref } from 'react'
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'
import { forwardRef } from 'react'

import { Checkbox } from '@local/ui/Checkbox'
import { Flex } from '@local/ui/Flex'
import { FormLabel } from '@local/ui/FormLabel'
import { useFormField } from '@local/ui/hooks/useFormField'

export type FormCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = PropsWithChildren<Omit<ControllerRenderProps<TFieldValues, TName>, 'ref'>>

const FormCheckboxInner = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  {
    children,
    onChange,
    value,
    ...props
  }: FormCheckboxProps<TFieldValues, TName>,
  ref: Ref<HTMLButtonElement>,
) => {
  const { formItemId } = useFormField()

  const handleOnCheckedChange = (value: CheckedState) => {
    onChange(value === true)
  }

  return (
    <Flex className="gap-2" direction="row" items="center">
      <Checkbox
        {...props}
        id={formItemId}
        onCheckedChange={handleOnCheckedChange}
        ref={ref}
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        value={`${value}`}
      />
      {children && (
        <FormLabel className="flex flex-row gap-sm">{children}</FormLabel>
      )}
    </Flex>
  )
}

export const FormCheckbox = forwardRef(FormCheckboxInner)
