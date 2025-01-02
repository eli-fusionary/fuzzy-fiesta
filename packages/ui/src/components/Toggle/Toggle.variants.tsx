import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const toggleVariants = cva(
  [
    'flex shrink flex-col items-start self-stretch',
    'rounded-xxs',
    'text-button font-bold',
    'text-buttonPrimary',
    'hover:bg-buttonPrimaryHover hover:text-white',
    'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-buttonPrimary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-buttonPrimary data-[state=on]:text-buttonPrimaryText',
  ],

  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'px-sm py-xs',
        lg: 'px-md py-sm',
        sm: 'p-xs',
      },
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-grey3 bg-transparent hover:bg-buttonPrimaryHover hover:text-white',
      },
    },
  },
)

export type ToggleVariantsProps = VariantProps<typeof toggleVariants>
