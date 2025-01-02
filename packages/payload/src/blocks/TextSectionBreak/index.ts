import type { Block } from 'payload'

import { backgroundColorField } from '@local/payload/fields/backgroundColor'
import { blockBaseFields } from '@local/payload/fields/blockBase'

export const TextSectionBreakBlock: Block = {
  fields: [...backgroundColorField(), ...blockBaseFields()],
  slug: 'Text Section Break',
}
