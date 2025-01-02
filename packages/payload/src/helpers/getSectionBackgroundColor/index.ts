import type { SectionProps } from '@local/ui/Section'

export type SectionBackgroundColor = NonNullable<SectionProps['background']>

export const sectionBackgroundColorOptions: Record<
  SectionBackgroundColor,
  string
> = {
  none: 'None',
  primary: 'Primary',
  primaryDark: 'Primary Dark',
  primaryLight: 'Primary Light',
  quaternary: 'Quaternary',
  quaternaryDark: 'Quaternary Dark',
  quaternaryLight: 'Quaternary Light',
  secondary: 'Secondary',
  secondaryDark: 'Secondary Dark',
  secondaryLight: 'Secondary Light',
  site: 'Site Background',
  tertiary: 'Tertiary',
  tertiaryDark: 'Tertiary Dark',
  tertiaryLight: 'Tertiary Light',
  white: 'White',
}

export type SectionBackgroundColorOptionValues =
  keyof typeof sectionBackgroundColorOptions

export const getSectionBackgroundColorOptions = (
  include?: SectionBackgroundColorOptionValues[],
): {
  label: string
  value: SectionBackgroundColorOptionValues
}[] =>
  Object.entries(sectionBackgroundColorOptions).reduce<
    { label: string; value: SectionBackgroundColorOptionValues }[]
  >((acc, [key, value]) => {
    if (
      include &&
      !include.includes(key as SectionBackgroundColorOptionValues)
    ) {
      return acc
    }

    return [
      ...acc,
      { label: value, value: key as SectionBackgroundColorOptionValues },
    ]
  }, [])
