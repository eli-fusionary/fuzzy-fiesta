import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@local/ui/cn'

import type { FormProps } from './form'
import { Button } from '../Button'
import { FormField } from '../FormField'
import { FormItem } from '../FormItem'
import { Input } from '../Input'
import { Form } from './form'

const Component: Meta<FormProps> = {
  args: {},
  argTypes: {},
  component: Form,
  parameters: {},
  title: 'Forms/Form',
}

export default Component

type Story = StoryObj<FormProps>

const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First name is required',
  }),
  lastName: z.string().min(1, {
    message: 'Last name is required',
  }),
})

const SimpleForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form {...form}>
      <form
        className={cn('mx-auto max-w-lg space-y-6')}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem
              description="First Name (optional description)"
              label="First Name"
            >
              <Input placeholder="Jane" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem label="Last Name">
              <Input placeholder="Doe" {...field} />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  args: {
    children: <SimpleForm />,
  },
  name: 'Form',
}
