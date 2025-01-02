import type { VariantProps } from 'class-variance-authority'
import type { ClassProp } from 'class-variance-authority/types'
import { cva } from 'class-variance-authority'

import type { ExcludeNull } from '@local/types/ExcludeNull'
import { cn } from '@local/ui/cn'

export const sectionBackgroundVariants = cva('flex flex-col', {
  defaultVariants: {
    hasBackgroundImage: false,
  },
  variants: {
    background: {
      none: 'bg-transparent',
      primary: 'bg-brandPrimary',
      primaryDark: 'bg-brandPrimaryDk',
      primaryLight: 'bg-brandPrimaryLt',
      quaternary: 'bg-brandQuaternary',
      quaternaryDark: 'bg-brandQuaternaryDk',
      quaternaryLight: 'bg-brandQuaternaryLt',
      secondary: 'bg-brandSecondary',
      secondaryDark: 'bg-brandSecondaryDk',
      secondaryLight: 'bg-brandSecondaryLt',
      site: 'bg-background',
      tertiary: 'bg-brandTertiary',
      tertiaryDark: 'bg-brandTertiaryDk',
      tertiaryLight: 'bg-brandTertiaryLt',
      white: 'bg-white',
    },
    hasBackgroundImage: {
      false: null,
      true: 'bg-cover bg-center',
    },
  },
})

export type SectionBackgroundVariantsProps = ClassProp &
  ExcludeNull<VariantProps<typeof sectionBackgroundVariants>>

export const sectionBackground = (
  props: ClassProp & SectionBackgroundVariantsProps,
) => cn(sectionBackgroundVariants(props))
