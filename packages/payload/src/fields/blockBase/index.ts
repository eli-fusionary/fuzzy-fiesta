import type { ArrayField, Field } from 'payload'
import { deepMerge } from 'payload'

import type { BodyFieldOverrides } from '@local/payload/fields/body'
import type { EyebrowFieldOverrides } from '@local/payload/fields/eyebrow'
import type { HeadingFieldOverrides } from '@local/payload/fields/heading'
import { bodyField } from '@local/payload/fields/body'
import { eyebrowField } from '@local/payload/fields/eyebrow'
import { headingField } from '@local/payload/fields/heading'
import { linkField } from '@local/payload/fields/link'

type BlockBaseFieldsOverrides = {
  bodyOverrides?: BodyFieldOverrides | false
  callsToActionOverrides?: ArrayField | false
  eyebrowOverrides?: EyebrowFieldOverrides | false
  headingOverrides?: false | HeadingFieldOverrides
}

type BlockBaseFields = (overrides?: BlockBaseFieldsOverrides) => Field[]

export const blockBaseFields: BlockBaseFields = (overrides = {}) => {
  const {
    bodyOverrides = {},
    callsToActionOverrides = {},
    eyebrowOverrides = {},
    headingOverrides = {},
  } = overrides

  const fields: Field[] = []

  if (eyebrowOverrides !== false) {
    fields.push(...eyebrowField(eyebrowOverrides))
  }

  if (headingOverrides !== false) {
    fields.push(...headingField(headingOverrides))
  }

  if (bodyOverrides !== false) {
    fields.push(...bodyField(bodyOverrides))
  }

  if (callsToActionOverrides !== false) {
    const callsToAction: Field = deepMerge<ArrayField>(
      {
        fields: [linkField()],
        label: 'Calls to Action',
        name: 'callsToAction',
        type: 'array',
      },
      callsToActionOverrides,
    )

    fields.push(callsToAction)
  }

  return fields
}
