import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const buttonVariants = cva(
  [
    'inline-flex justify-center',
    'disabled:opacity-50',
    'transition-colors duration-300 ease-in-out',
  ],
  {
    defaultVariants: {
      kind: 'solid',
      shape: 'rounded',
      size: 'base',
    },
    variants: {
      kind: {
        'alt-outline': [
          'border border-buttonSecondary',
          'bg-transparent text-buttonTertiaryText',
          'hover:bg-buttonSecondaryHover hover:text-buttonSecondaryText disabled:hover:bg-transparent disabled:hover:text-buttonTertiaryText',
        ],

        'alt-solid': [
          'bg-buttonSecondary text-buttonSecondaryText',
          'hover:bg-buttonSecondaryHover disabled:hover:bg-buttonSecondary',
          'focus:ring-2 focus:ring-buttonSecondary focus:ring-offset-2 focus:ring-offset-white',
        ],
        outline: [
          'border border-buttonPrimary',
          'bg-transparent text-buttonTertiaryText',
          'hover:bg-buttonPrimaryHover hover:text-buttonPrimaryText disabled:hover:bg-transparent disabled:hover:text-buttonTertiaryText',
        ],
        solid: [
          'bg-buttonPrimary text-buttonPrimaryText',
          'hover:bg-buttonPrimaryHover disabled:hover:bg-buttonPrimary',
          'focus:ring-2 focus:ring-buttonPrimary focus:ring-offset-2 focus:ring-offset-white',
        ],

        'white-outline': [
          'border border-buttonTertiaryText',
          'bg-transparent text-buttonTertiaryText',
          'hover:bg-buttonTertiaryHover hover:text-buttonTertiaryText disabled:hover:bg-transparent disabled:hover:text-buttonTertiaryText',
        ],

        'white-solid': [
          'bg-buttonTertiary text-buttonTertiaryText',
          'hover:bg-buttonTertiaryHover disabled:hover:bg-buttonTertiary',
          'focus:ring-2 focus:ring-buttonPrimary focus:ring-offset-2 focus:ring-offset-white',
        ],
      },
      shape: {
        pill: ['rounded-full'],
        rectangle: ['rounded-none'],
        rounded: ['rounded'],
      },
      size: {
        base: ['text-button', 'px-buttonX py-buttonY'],
        extraLarge: ['text-buttonExtraLarge', 'px-buttonXlX py-buttonXlY'],
        extraSmall: ['text-buttonExtraSmall', 'px-buttonXsX py-buttonXsY'],
        large: ['text-buttonLarge', 'px-buttonLgX py-buttonLgY'],
        responsive: [
          ['text-buttonExtraSmall', 'px-buttonXsX py-buttonXsY'],
          ['sm:text-buttonSmall', 'sm:px-buttonSmX sm:py-buttonSmY'],
          ['md:text-button', 'md:px-buttonX md:py-buttonY'],
          ['lg:text-buttonLarge', 'lg:px-buttonLgX lg:py-buttonLgY'],
          ['xl:text-buttonExtraLarge', 'xl:px-buttonXlX xl:py-buttonXlY'],
        ],
        small: ['text-buttonSmall', 'px-buttonSmX py-buttonSmY'],
      },
    },
  },
)

export type ButtonVariantsProps = ExcludeNull<
  VariantProps<typeof buttonVariants>
>

export type ButtonAppearances = NonNullable<ButtonVariantsProps['kind']>

export const button = (props: ButtonVariantsProps & ClassProp) =>
  cn(buttonVariants(props))
