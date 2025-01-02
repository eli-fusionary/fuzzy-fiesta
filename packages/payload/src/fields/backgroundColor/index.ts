import type { SelectField } from 'payload'
import { deepMerge } from 'payload'

import type { SectionBackgroundColorOptionValues } from '@local/payload/helpers/getSectionBackgroundColor'
import { getSectionBackgroundColorOptions } from '@local/payload/helpers/getSectionBackgroundColor'

export type BackgroundColorFieldOverrides = {
  backgroundColorOverrides?: {
    includeValues?: SectionBackgroundColorOptionValues[]
  } & Partial<SelectField>
}

type BackgroundColorField = (
  overrides?: BackgroundColorFieldOverrides,
) => [SelectField]

export const backgroundColorField: BackgroundColorField = (overrides = {}) => {
  const {
    backgroundColorOverrides: {
      includeValues: backgroundColorOptions,
      ...backgroundColorOverrides
    } = {},
  } = overrides

  const backgroundColorField = deepMerge<SelectField>(
    {
      name: 'backgroundColor',
      options: getSectionBackgroundColorOptions(backgroundColorOptions),
      type: 'select',
    },
    backgroundColorOverrides,
  )

  return [backgroundColorField]
}
