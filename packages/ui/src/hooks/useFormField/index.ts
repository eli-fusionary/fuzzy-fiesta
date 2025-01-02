import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormFieldContext } from '@local/ui/FormField'
import { FormItemContext } from '@local/ui/FormItem'

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { formState, getFieldState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext
  const { name } = fieldContext

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name,
    ...fieldState,
  }
}
